import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import Svg from "./svg";
import ResultsTitle from "./ResultsTitle";
import { Cards } from "./index";

const Results = () => {
  let url = useSelector((state) => state.apiSlice.api);
  const [searchData, setSearchData] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  const rapid_api = process.env.NEXT_PUBLIC_RAPID_API_KEY;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": rapid_api,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  useEffect(() => {
    setPageNumber(0);
    try {
      setSearchData(null);
      const fetchData = async () => {
        await fetch(url, options)
          .then((response) => response.json())
          .then((response) => setSearchData(response))
          .catch((err) => console.error(err));
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pageNumber]);

  const showProducts = 10;
  const paginateProducts = pageNumber * showProducts;

  const pageCount = Math.ceil(searchData?.data?.length / showProducts);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      {searchData && <ResultsTitle num={searchData?.data?.length || 0} />}
      {searchData ? (
        <>
          {searchData?.data
            ?.slice(paginateProducts, paginateProducts + showProducts)
            ?.map((jobs, index) => (
              <Cards job={jobs} key={index} />
            ))}

          {searchData?.data?.length > 10 && (
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              className="flex items-center justify-center gap-4 mt-8"
              containerClassName={s.paginationBtns}
              previousClassName={s.previousBtn}
              nextLinkClassName={s.nextBtn}
              disabledClassName={s.paginationDisabled}
              activeClassName={s.paginationActive}
            />
          )}
        </>
      ) : (
        <main className="flex items-center justify-center mt-6  animate-spin w-full">
          <Svg icon={"spinner"} className={s.icons_spinner} />
        </main>
      )}
    </>
  );
};

export default Results;

const s = {
  icons: "h-[20px] w-[20px]",
  icons_spinner: "h-[50px] w-[50px]",
  paginationBtns: "",
  previousBtn: "border py-2 px-4 rounded-md dark:border-white border-black",
  nextBtn: "border py-2 px-4 rounded-md dark:border-white border-black",
  paginationDisabled: "hidden",
  paginationActive: "border px-2 rounded-md border-pink-500",
};

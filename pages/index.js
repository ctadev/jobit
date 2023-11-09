import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { update as updateJobs } from "../redux/jobListSlice";

import { JobCard, Recommendations, FeaturedCompanies } from "./components";
import Svg from "./components/jobsearch/svg";
import getDate from "../utils/getdate";

const Home = () => {
  const [data, setData] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const dispatch = useDispatch();

  const showProducts = 4;
  const paginateProducts = pageNumber * showProducts;

  const pageCount = Math.ceil(data?.data?.length / showProducts);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const rapid_api = process.env.NEXT_PUBLIC_RAPID_API_KEY;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": rapid_api,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  useEffect(() => {
    try {
      const resp = async () =>
        await fetch(
          "https://jsearch.p.rapidapi.com/search?query=React%20Developer&num_pages=20",
          options
        )
          .then((response) => response.json())
          .then((response) => setData(response))
          .catch((err) => console.error(err));
      resp();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(updateJobs(data.data));
    }
  }, [data]);
  return (
    <div className="flex items-center justify-center w-full">
      <div className="px-6 md:px-10 max-w-[1600px] w-full">
        <section className="mt-10">
          <h1 className="font-poppins text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
            Welcome to the Job Search Platform for Developers
          </h1>
          <h4 className="px-4 mt-4 text-sm text-natural-grey">{getDate()}</h4>
        </section>

        <section className="flex flex-col gap-4 xl:flex-row mt-4 w-full">
          {/* Left Side Job Cards  */}
          <div className="flex grow flex-col">
            <h1 className="px-4 py-3 font-poppins text-xl lg:text-2xl font-semibold xs:ml-0 mb-3">
              Latest Job Posts
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:gap-[30px] w-full">
              {data &&
                data?.data
                  ?.slice(paginateProducts, paginateProducts + showProducts)
                  .map((item, index) => <JobCard data={item} key={index} />)}
            </div>
            {!data && (
              <div className="flex justify-center items-center animate-spin w-full min-h-[200px]">
                <Svg icon={"spinner"} className="w-10 h-10" />
              </div>
            )}

            <div className="justify-center">
              {data?.data?.length > 4 && (
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
            </div>
          </div>

          {/* Recommendations Right Side */}
          <div className="w-full xl:w-[400px] md:flex-row">
            <h2 className="py-3 font-poppins text-xl minlg:text-2xl font-semibold sm:ml-2 ml-0 border-primary-color mb-3">
              Recomended For You
            </h2>

            <div className="flex flex-col md:justify-center md:flex-row md:flex-wrap xl:flex-col rounded-lg px-[14px] py-[12px] gap-[10px] w-full">
              {data &&
                data?.data
                  ?.slice(0, 10)
                  .map((item, index) => (
                    <Recommendations data={item} key={index} />
                  ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-poppins text-xl minlg:text-2xl font-semibold ml-2 xs:ml-0 border-primary-color mb-3">
            Featured Companies
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pb-12  max-w-[900px]">
            {data &&
              data?.data
                ?.slice(5, 8)
                .map((item, index) => (
                  <FeaturedCompanies data={item} key={index} />
                ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

const s = {
  icons: "h-[20px] w-[20px]",
  icons_spinner: "h-[50px] w-[50px]",
  paginationBtns: "",
  previousBtn: "border py-2 px-4 rounded-md dark:border-white border-black",
  nextBtn: "border py-2 px-4 rounded-md dark:border-white border-black",
  paginationDisabled: "hidden",
  paginationActive: "border px-2 rounded-md border-pink-500",
};

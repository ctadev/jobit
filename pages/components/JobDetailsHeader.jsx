import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import Svg from "./jobsearch/svg";
import { searchJob } from "../../redux/apiSlice";

const JobDetailsHeader = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchError, setSearchError] = useState(false);
  const [typeError, setTypeError] = useState(false);
  const [locationInput, setLocationInput] = useState("");
  const [jobTypeInput, setJobTypeInput] = useState("");
  const [locationState, setLocationState] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");
  const [dropdown, setDropdown] = useState(null);

  const router = useRouter();

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((res) => setDropdown(res));

    const handleClick = (e) => {
      if (e.target !== dropdownRef.current) {
        setLocationState(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      searchInput &&
      (jobTypeInput == "FULLTIME" ||
        jobTypeInput == "PARTTIME" ||
        jobTypeInput == "INTERN" ||
        jobTypeInput == "CONTRACTOR" ||
        jobTypeInput == "")
    ) {
      dispatch(
        searchJob({
          search: searchInput,
          location: locationInput,
          type: jobTypeInput,
        })
      );
      setSearchError(false);
      setTypeError(false);
      router.push({
        pathname: `/job-search`,
      });
    } else {
      setJobTypeInput("");
      setSearchError(true);
      setTypeError(true);
    }
  };

  return (
    <header className={s.header}>
      <section className={s.header_title}>
        <h1 className={s.title}>Let's find your dream job</h1>
        <p className={s.description}>Monday, 13 Jan 2023</p>
      </section>

      <form className={s.inputs_container} onSubmit={handleSubmit}>
        <div className={`${s.input_wrapper} ${s.input_top_style}`}>
          <input
            type="text"
            className={`${s.input_main_style} ${s.input_top_style} ${
              searchError && "placeholder:text-red-400"
            }`}
            placeholder={`${
              searchError
                ? "Search Input Cannot be Empty"
                : "Job Title, Company or Keywords"
            }`}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Svg icon="search" className={s.icons} />
        </div>

        <div className={`${s.input_wrapper}`}>
          <input
            type="text"
            className={s.input_main_style}
            placeholder="Select Location"
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
            onClick={(e) => {
              setLocationState(!locationState);
              e.stopPropagation();
            }}
          />
          <Svg icon="pin" className={s.icons} />
          <Svg icon="chevron" className={s.chevron_icon} />
          <ul
            ref={dropdownRef}
            className={`${
              locationState
                ? "dark:bg-black-bg-2 bg-white absolute w-full border dark:border-white z-50 max-h-[400px] overflow-y-scroll"
                : "hidden"
            }`}
          >
            <div className="sticky top-0 left-0">
              <Svg icon="search" className="absolute left-3 top-3 h-6 w-6" />
              <input
                type="text"
                className="w-full h-[3rem] border-2 border-white px-10 py-1"
                value={searchLocation}
                onChange={(e) =>
                  setSearchLocation(e.target.value.toLowerCase())
                }
              />
              <div onClick={() => setSearchLocation("")}>
                <Svg
                  icon="close"
                  className="absolute right-3 top-3 h-6 w-6 cursor-pointer"
                />
              </div>
            </div>
            {dropdown?.map((item) => (
              <li
                className={`px-2 py-2 hover:bg-blue-400 cursor-pointer ${
                  item?.name?.toLowerCase().startsWith(searchLocation)
                    ? "block"
                    : "hidden"
                }`}
                key={item?.name}
                onClick={() => {
                  if (item?.name) {
                    setLocationInput(item.name);
                    setLocationState(false);
                  }
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className={`${s.input_wrapper} ${s.input_bottom_style}`}>
          <input
            type="text"
            className={`${s.input_main_style} ${s.input_bottom_style} `}
            placeholder="Job Type"
            value={jobTypeInput}
            onChange={(e) => setJobTypeInput(e.target.value.toUpperCase())}
          />
          <Svg icon="briefcase" className={s.icons} />
          <button className={s.find_btn}>Find Jobs</button>
          {typeError && (
            <p className="text-red-400 text-sm flex items-center justify-center text-center">
              Accepted Inputs: Fulltime, Parttime, Intern, Contractor or Empty.
            </p>
          )}
        </div>
      </form>
    </header>
  );
};

export default JobDetailsHeader;

const s = {
  header: "w-full pt-[30px]",
  header_title: "",
  title: "text-h1 text-black-1 dark:text-white",
  description: "text-h6 mt-[12px] text-natural-grey",

  inputs_container: "grid md:grid-cols-3 mt-[50px]",
  input_wrapper: "border relative h-[80px]",
  input_main_style:
    "w-full h-full outline-none px-[61px] text-natural-grey dark:bg-black-bg-2",
  input_top_style: "rounded-t-lg md:rounded-l-lg md:rounded-tr-none",
  input_bottom_style: "rounded-b-lg md:rounded-r-lg md:rounded-bl-none",
  icons: "h-6 w-6 absolute left-6 top-7 text-natural-grey",
  chevron_icon: "h-6 w-6 absolute right-6 top-7 text-natural-grey",
  find_btn:
    "absolute bg-primary-color rounded-md py-[12px] px-[19px] h-[48px] right-5 top-4",
};

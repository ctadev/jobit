import React, { useEffect, useState } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { HiOutlineBell } from "react-icons/hi";

import { RecentJobPostCard } from ".";
import { useGetCompanyJobsQuery } from "../../redux/companyJobsSlice";
import { useSelector } from "react-redux";
import Svg from "../components/jobsearch/svg.js";

const CompanyJobs = () => {
  const companyDetails = useSelector((state) => state.currentCompanyData.value);
  const [companyJobs, setCompanyJobs] = useState([]);
  const { data, error, isLoading } = useGetCompanyJobsQuery(
    companyDetails?.employer_name
  );

  useEffect(() => {
    if (data) {
      setCompanyJobs(data.data);
    }
  }, [data]);

  if (isLoading)
    return (
      <main className="flex items-center justify-center mt-6  animate-spin w-full">
        <Svg icon={"spinner"} className="h-[50px] w-[50px]" />
      </main>
    );
  if (error)
    return (
      <div className="mx-4 mt-8 px-4 py-5 rounded-xl dark:bg-black-bg-2 bg-white w-full flex items-center justify-center">
        <h1 className="text-center">No Related Job Posting Found...</h1>
      </div>
    );

  return (
    <div className="mx-4 mt-8 px-4 py-5 rounded-xl dark:bg-black-bg-2 bg-white">
      <div className="md:flex md:justify-between">
        <form className="flex items-center justify-between py-3 px-3 gap-2 rounded-xl dark:bg-[#21212B] bg-[#FAFAFB] md:w-[60%]">
          <RxMagnifyingGlass className="text-[#757D8A] text-xl" />
          <input
            type="text"
            placeholder="Search Job title or Keyword"
            className="bg-transparent flex-1"
          />
          <button
            type="submit"
            className="bg-[#0BAB7C] py-1 px-3 rounded-lg text-white"
          >
            Search
          </button>
        </form>
        <div className="flex items-center bg-transparent border py-3 px-3 gap-2 rounded-xl mt-4 dark:border-[#757D8A]">
          <HiOutlineBell className="text-[#757D8A] text-xl" />
          <p className="text-[#757D8A]">Create Job Alert</p>
        </div>
      </div>
      <h2 className="font-semibold text-lg mt-8 dark:text-white text-[#171725]">
        Recently Posted Job
      </h2>
      <div className="grid grid-cols-1 gap-6 mt-4 xl:grid-cols-2">
        {companyJobs &&
          companyJobs
            .slice(0, 4)
            .map((companyJob, index) => (
              <RecentJobPostCard key={index} companyJob={companyJob} />
            ))}
      </div>
      <div className=" justify-center items-center mt-16 hidden md:flex">
        <div className="flex  items-center justify-center bg-transparent border py-2 px-3 gap-2 rounded-xl dark:border-[#757D8A] text-[#757D8A]">
          See All Jobs
        </div>
      </div>
    </div>
  );
};

export default CompanyJobs;

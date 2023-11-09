import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { BsPlus, BsStarHalf } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import { update } from "../../redux/currentCompanyDataSlice";

const SimilarCompanyCard = ({ number }) => {
  const [savedCompanyList, setSavedCompanyList] = useState([]);
  const jobs = useSelector((state) => state.jobList.value);
  const currentCompany = useSelector((state) => state.currentCompanyData.value);
  const dispatch = useDispatch();

  // truncate long company names
  const limit = (string, length, end = "...") => {
    return string.length < length ? string : string.substring(0, length) + end;
  };

  const handleSaveCompany = () => {
    // save company name to local storage
    const savedCompanies =
      JSON.parse(localStorage.getItem("savedCompanies")) || [];

    // check if company is already saved
    if (savedCompanies.includes(jobs[number]?.employer_name)) {
      // remove company from saved list
      const index = savedCompanies.indexOf(jobs[number]?.employer_name);
      savedCompanies.splice(index, 1);
      localStorage.setItem("savedCompanies", JSON.stringify(savedCompanies));
      setSavedCompanyList(savedCompanies);
      return;
    }

    savedCompanies.push(jobs[number]?.employer_name);
    localStorage.setItem("savedCompanies", JSON.stringify(savedCompanies));
    setSavedCompanyList(savedCompanies);
  };

  useEffect(() => {
    const savedCompanies =
      JSON.parse(localStorage.getItem("savedCompanies")) || [];
    setSavedCompanyList(savedCompanies);
  }, []);

  return (
    <>
      {jobs[number] &&
        jobs[number]?.employer_name !== currentCompany?.employer_name &&
        jobs[number]?.employer_name !== "undefined" &&
        jobs[number]?.employer_name !== "null" && (
          <div className="mx-4 py-6 px-4 mb-5 rounded-xl dark:bg-[#21212B] bg-white">
            <div className="flex lg:flex-col lg:gap-4 xl:flex-row justify-between">
              <div className="flex items-center gap-3">
                <Link
                  href={`/companydetails/${jobs[
                    number
                  ]?.employer_name.toLowerCase()}`}
                  onClick={() => {
                    dispatch(update(jobs[number]));
                  }}
                >
                  {jobs[number] ? (
                    <img
                      src={
                        jobs[number]?.employer_logo ||
                        "https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/31.png"
                      }
                      referrerPolicy="no-referrer"
                      alt="company"
                      className="w-12 h-12"
                    />
                  ) : (
                    <img
                      src="https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/31.png"
                      alt="company"
                      className="w-12 h-12"
                    />
                  )}
                </Link>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Link
                      href={`/companydetails/${jobs[
                        number
                      ]?.employer_name.toLowerCase()}`}
                      onClick={() => {
                        dispatch(update(jobs[number]));
                      }}
                    >
                      <h2 className="font-semibold text-md dark:text-white">
                        {limit(jobs[number]?.employer_name, 10)}
                      </h2>
                    </Link>
                    <BsStarHalf className="text-[#FFC542]" />
                    <p className="text-[#92929D]">4.8k</p>
                  </div>
                  <h2 className="text-[#92929D] text-sm">LLC</h2>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div
                  className="flex items-center border border-[#0BAB7C] text-[#0BAB7C] justify-center rounded-2xl py-1 px-4 cursor-pointer"
                  onClick={handleSaveCompany}
                >
                  {!savedCompanyList.includes(jobs[number]?.employer_name) && (
                    <BsPlus className="text-2xl" />
                  )}
                  {savedCompanyList.includes(jobs[number]?.employer_name) ? (
                    <p>Followed</p>
                  ) : (
                    <p>Follow</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default SimilarCompanyCard;

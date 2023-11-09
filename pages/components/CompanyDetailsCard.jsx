import Image from "next/image";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BsDot, BsPlus } from "react-icons/bs";

import images from "../../assets";
import { CompanyJobs, Button } from ".";

const CompanyDetailsCard = () => {
  const companyDetails = useSelector((state) => state.currentCompanyData.value);
  const [savedCompanyList, setSavedCompanyList] = useState([]);

  const handleSaveCompany = () => {
    // save company name to local storage
    const savedCompanies =
      JSON.parse(localStorage.getItem("savedCompanies")) || [];

    // check if company is already saved
    if (savedCompanies.includes(companyDetails?.employer_name)) {
      // remove company from saved list
      const index = savedCompanies.indexOf(companyDetails?.employer_name);
      savedCompanies.splice(index, 1);
      localStorage.setItem("savedCompanies", JSON.stringify(savedCompanies));
      setSavedCompanyList(savedCompanies);
      return;
    }

    savedCompanies.push(companyDetails?.employer_name);
    localStorage.setItem("savedCompanies", JSON.stringify(savedCompanies));
    setSavedCompanyList(savedCompanies);
  };

  useEffect(() => {
    const savedCompanies =
      JSON.parse(localStorage.getItem("savedCompanies")) || [];
    setSavedCompanyList(savedCompanies);
  }, []);

  return (
    <div>
      <div className="w-full relative">
        <Image
          src={images.background}
          alt="background"
          className="w-full rounded-t-3xl mt-7 max-h-48"
        />
        {companyDetails ? (
          <div className="absolute bg-natural-4 bottom-[-30px] rounded-lg border left-4">
            <img
              src={
                companyDetails?.employer_logo ||
                "https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/31.png"
              }
              referrerPolicy="no-referrer"
              alt="company logo"
              className="object-cover p-[1px] w-[60px] h-[60px]"
            />
          </div>
        ) : (
          <div className="absolute bg-natural-4 bottom-[-30px] rounded-lg border left-4">
            <img
              src="https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/31.png"
              alt="company logo"
              className="object-cover p-[1px] w-[60px] h-[60px]"
            />
          </div>
        )}
      </div>
      <div className="md:flex justify-between">
        <div>
          <h1 className="mt-12 px-4 font-semibold text-2xl dark:text-white">
            {companyDetails?.employer_name}
          </h1>
          <div className="px-4 mt-4 flex items-center gap-2 dark:text-[#92929D] text-[#696974]">
            <p>{companyDetails?.employer_name} </p>
            <BsDot />
            <p>
              {companyDetails?.job_city}
              {companyDetails?.job_city != null && ","}
              {companyDetails?.job_country}
            </p>
          </div>
          <div className="px-4 mt-2 flex items-center gap-2  dark:text-[#92929D] text-[#696974]">
            <p>Design Resources Platform</p>
            <BsDot />
            <p className="text-[#92929D]">203,765 Followers</p>
          </div>
        </div>
        <div className="md:hidden block border-b mt-6 dark:border-[#44444F] border-[#F1F1F5]" />
        <div className="md:mt-6 md:mr-6">
          <Image className="ml-4 mt-6" src={images.peopleIcons} alt="people" />
          <div
            className="flex items-center border border-[#0BAB7C] text-[#0BAB7C] justify-center rounded-xl py-1 mt-6 w-[90%] mx-auto cursor-pointer"
            onClick={handleSaveCompany}
          >
            {!savedCompanyList.includes(companyDetails?.employer_name) && (
              <BsPlus className="text-2xl" />
            )}
            {savedCompanyList.includes(companyDetails?.employer_name) ? (
              <p>Followed</p>
            ) : (
              <p>Follow</p>
            )}
            {/* <BsPlus className="text-3xl" />
                        <p>Follow</p> */}
          </div>
        </div>
      </div>
      <div className="mt-10 px-4 flex gap-2 flex-wrap">
        <Button
          title="About"
          bgColor="bg-transparent"
          textColor="text-[#696974]"
          borderColor="dark:border-[#696974] border-[#F1F1F5]"
        />
        <Button
          title="Jobs"
          bgColor="bg-[#44444F]"
          textColor="text-white"
          borderColor="dark:border-[#44444F] border-[#F1F1F5]"
        />
        <Button
          title="Products"
          bgColor="bg-transparent"
          textColor="text-[#696974]"
          borderColor="dark:border-[#696974] border-[#F1F1F5]"
        />
        <Button
          title="Employees"
          bgColor="bg-transparent"
          textColor="text-[#696974]"
          borderColor="dark:border-[#696974] border-[#F1F1F5]"
        />
        <div className="hidden md:flex gap-2">
          <Button
            title="Locations"
            bgColor="bg-transparent"
            textColor="text-[#696974]"
            borderColor="dark:border-[#696974] border-[#F1F1F5]"
          />
          <Button
            title="Reviews"
            bgColor="bg-transparent"
            textColor="text-[#696974]"
            borderColor="dark:border-[#696974] border-[#F1F1F5]"
          />
        </div>
      </div>
      <CompanyJobs />
    </div>
  );
};

export default CompanyDetailsCard;

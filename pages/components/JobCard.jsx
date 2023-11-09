import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import images from "../../assets";
import { Button } from "./";
import { update } from "../../redux/currentCompanyDataSlice";

const JobCard = ({ data }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const date1 = new Date();
  const date2 = new Date(data.job_offer_expiration_datetime_utc);
  // To calculate the time difference of two dates
  const diffInTime = date2.getTime() - date1.getTime();

  // To calculate the no. of days between two dates
  const diffInDays = (diffInTime / (1000 * 3600 * 24)).toFixed(0);

  const getJobDetails = () => {
    router.push({
      pathname: `/jobs/${data.job_id}`,
    });
  };

  const getCompanyDetails = () => {
    router.push({
      pathname: `/companydetails/${data.employer_name.toLowerCase()}`,
    });
    dispatch(update(data));
  };

  return (
    <main className="flex flex-col p-6 dark:bg-black-bg-2 bg-white rounded-lg w-full">
      {/* First Section */}
      <section className="flex md:gap-2 md:px-4">
        <div className="w-[64px] h-[64px] rounded-lg shrink-0 p-2 bg-[#FAFAFB] dark:bg-[#2C2C2C] cursor-pointer">
          {data.employer_logo ? (
            <img
              src={
                data.employer_logo ||
                "https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/31.png"
              }
              className="w-full h-full rounded-lg"
              alt="logo"
              onClick={getCompanyDetails}
            />
          ) : (
            <img
              src="https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/31.png"
              className="w-full h-full rounded-lg"
              alt="logo"
              onClick={getCompanyDetails}
            />
          )}
        </div>

        <div onClick={() => getJobDetails()} className="cursor-pointer">
          <h1 className="flex font-poppins text-xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
            {data.job_title}
          </h1>
          <ul className="flex gap-2 px-2">
            <li>PHP</li>
            <li>Laravel</li>
            <li>CSS</li>
            <li>React</li>
          </ul>
        </div>
      </section>

      {/* {/ Middle Section /} */}
      <section className="mt-5 cursor-pointer" onClick={() => getJobDetails()}>
        <p className="px-4 text-sm text-natural-grey">
          {data.job_description.slice(0, 300)}...
        </p>
      </section>

      {/* {/ Bottom Section  */}
      <section className="mt-5">
        <div className="flex gap-2 md:justify-start justify-between">
          <div className="text-sm text-natural-grey dark:bg-black-bg-3 bg-natural-4 flex w-auto h-auto items-center px-2 py-1 rounded-lg">
            <Image
              src={images.briefcase}
              alt="briefcase"
              width={20}
              height={20}
            />
            <h5 className="px-1">{data.job_employment_type}</h5>
          </div>
          <div className="text-sm text-natural-grey dark:bg-black-bg-3 bg-natural-4 flex w-auto h-auto items-center rounded-lg">
            <Image src={images.clock} alt="clock" width={16} height={16} />
            <h5 className="px-2">
              {diffInDays < 0 ? "Unavailable" : `${diffInDays} days left`}
            </h5>
          </div>
        </div>

        <div className="flex flexBetween mt-8">
          <div className="flex font-poppins text-l minlg:text-4xl font-semibold ml-4 xs:ml-0">
            {data.job_max_salary && (
              <h5 className="text-black-1 dark:text-white">
                ${data.job_max_salary}k / {data.job_salary_period.toLowerCase()}
              </h5>
            )}
          </div>
          <Link href={data.job_apply_link} target="_blank">
            <Button
              title="Apply Now"
              bgColor="bg-primary-color"
              borderColor="dark:border-black-bg-3"
              textColor="bg-primary-color text-white"
              px="px-6"
              py="py-2"
            />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default JobCard;

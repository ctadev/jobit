import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import images from "../../assets";
import { update } from "../../redux/currentCompanyDataSlice";

const FeaturedCompanies = ({ data }) => {
  const [test, setTest] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

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
    <main className="flex flex-col p-4 mx-2 dark:bg-black-bg-2 bg-white rounded-lg">
      <section className=" dark:bg-black-bg-2 bg-white rounded-lg">
        <div className="flex m-2 gap-4 cursor-pointer">
          {data.employer_logo ? (
            <img
              src={
                data.employer_logo ||
                "https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/31.png"
              }
              referrerPolicy="no-referrer"
              className="w-[48px] h-[48px] rounded-lg"
              alt="logo"
              onClick={() => getCompanyDetails()}
            />
          ) : (
            <img
              src="https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/31.png"
              className="w-[48px] h-[48px] rounded-lg"
              alt="logo"
              onClick={() => getCompanyDetails()}
            />
          )}
          <h1
            className="flex font-poppins text-sm minlg:text-4xl font-semibold ml-4 xs:ml-0 items-center"
            onClick={() => getJobDetails()}
          >
            {data.job_title}
          </h1>
        </div>
        <div>
          <div className="text-sm text-natural-grey flex w-auto h-auto items-center px-2 py-1 rounded-lg">
            <Image
              src={images.location}
              alt="location"
              width={20}
              height={20}
            />
            <h5 className="px-2">
              {data.job_city
                ? `${data?.job_city} , ${data?.job_country}`
                : `${data.job_country}`}
            </h5>
          </div>
          <div className=" text-sm text-natural-grey flex w-auto h-auto items-center px-2 py-1 rounded-lg">
            <Image
              src={images.briefcase}
              alt="briefcase"
              width={20}
              height={20}
            />
            <h5 className="px-2">10 Job Vavancy</h5>
          </div>
        </div>
        <section className="dark:bg-black-bg-3 bg-natural-5 rounded-lg p-2 mt-8">
          <h1 className="flex text-natural-grey justify-center">See all</h1>
        </section>
      </section>
    </main>
  );
};

export default FeaturedCompanies;

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useRouter } from "next/navigation";

import { Button, TextBubble } from ".";

const RecentJobPostCard = ({ companyJob }) => {
  const [estimatedSalary, setEstimatedSalary] = useState([]);

  const router = useRouter();

  const getJobDetails = () => {
    router.push({
      pathname: `/jobs/${companyJob.job_id}`,
    });
  };

  const limit = (string, length, end = "...") => {
    return string.length < length ? string : string.substring(0, length) + end;
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
      const fetchData = async () =>
        await fetch(
          `https://jsearch.p.rapidapi.com/estimated-salary?job_title=${companyJob?.job_title}&location=${companyJob?.job_city}&radius=100`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            setEstimatedSalary(response.data);
          })
          .catch((err) => console.error(err));
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="dark:bg-black-bg-3 bg-white px-4 py-6 rounded-lg w-full shadow-xl">
      <div className="flex gap-6 justify-between items-center">
        <div>
          {companyJob?.employer_logo ? (
            <div className="dark:bg-[#1C1C24] dark:border-2 dark:border-[#44444F] bg-[#FAFAFB] p-2 rounded-lg">
              <img
                src={
                  companyJob?.employer_logo ||
                  "https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/31.png"
                }
                alt="company"
                className="object-contain w-[40px] h-[40px]"
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            <div className="dark:bg-[#1C1C24] dark:border-2 dark:border-[#44444F] bg-[#FAFAFB] p-2 rounded-lg">
              <img
                src="https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/31.png"
                alt="company"
                className="object-contain w-[40px] h-[40px]"
              />
            </div>
          )}
        </div>
        <div className="flex-1 flex-col cursor-pointer" onClick={getJobDetails}>
          <div className="flex justify-between">
            <h2 className="font-semibold text-lg dark:text-white">
              {companyJob?.job_title}
            </h2>
            <HiOutlineDotsHorizontal className="text-[#B5B5BE] text-xl" />
          </div>
          <div className="flex gap-1 mt-4">
            <TextBubble text="PHP" />
            <TextBubble text="Laravel" />
            <TextBubble text="CSS" />
          </div>
        </div>
      </div>
      <p
        className="mt-7 font-normal text-[#696974] text-lg cursor-pointer"
        onClick={getJobDetails}
      >
        {companyJob?.job_highlights?.Responsibilities?.[0]
          ? limit(companyJob?.job_highlights?.Responsibilities?.[0], 100)
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."}
      </p>
      <div className="flex justify-between mt-7 items-center">
        <p className={`font-extrabold text-xl dark:text-white`}>
          {estimatedSalary && estimatedSalary.length > 0
            ? `$${(estimatedSalary[0].min_salary / 12000).toFixed(0)}k-${(
                estimatedSalary[0].max_salary / 12000
              ).toFixed(0)}k`
            : "$15k-20k"}
          <span
            className={`dark:text-white text-[#696974] font-normal text-lg`}
          >
            /month
          </span>
        </p>
        <Link href={companyJob?.job_apply_link} target="_blank">
          <Button
            title="Apply Now"
            bgColor="bg-[#0BAB7C]/10"
            textColor="text-[#0BAB7C]"
          />
        </Link>
      </div>
    </div>
  );
};

export default RecentJobPostCard;

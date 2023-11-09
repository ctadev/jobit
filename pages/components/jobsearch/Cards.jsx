import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { update } from "../../../redux/currentCompanyDataSlice";

import getDay from "./getdate";
import Svg from "./svg";
import Button from "../Button";

const Cards = ({ job }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const getJobDetails = () => {
    router.push({
      pathname: `/jobs/${job.job_id}`,
    });
  };

  const getCompanyDetails = () => {
    router.push({
      pathname: `/companydetails/${job?.employer_name.toLowerCase()}`,
    });
    dispatch(update(job));
  };

  const limit = (string, length, end = "...") => {
    return string.length < length ? string : string.substring(0, length) + end;
  };

  return (
    <section className="p-[20px] relative bg-[#FFFFFF] dark:bg-black-bg-2 mt-4 flex flex-col gap-[22px] rounded-lg">
      {/* First Section */}
      <ul className="flex justify-between items-center">
        <li className="flex gap-[20px] w-[70%]">
          {job?.employer_logo ? (
            <div
              className="bg-natural-grey p-2 rounded-md w-fit h-fit shrink-0 cursor-pointer"
              onClick={getCompanyDetails}
            >
              <img
                src={
                  job?.employer_logo ||
                  "https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/31.png"
                }
                referrerPolicy="no-referrer"
                alt="company"
                height={40}
                width={40}
              />
            </div>
          ) : (
            <div
              className="bg-natural-grey p-2 rounded-md w-fit h-fit shrink-0 cursor-pointer"
              onClick={getCompanyDetails}
            >
              <img
                src="https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/31.png"
                alt="company"
                height={40}
                width={40}
              />
            </div>
          )}

          <div className="cursor-pointer">
            <h2
              className="text-BodyL-600 text-black-1 dark:text-white"
              onClick={() => getJobDetails()}
            >
              {job.job_title}
            </h2>
            <p
              className="text-BodyM3-500 text-natural-3"
              onClick={getCompanyDetails}
            >
              {job.employer_name +
                " • " +
                job.job_city +
                ", " +
                job.job_country +
                " • "}
              {getDay(job.job_posted_at_timestamp) > 0
                ? `${getDay(job.job_posted_at_timestamp)} days ago`
                : "just now"}
            </p>
          </div>
        </li>

        <li className="flex gap-2 items-center bg-natural-5 dark:bg-natural-grey py-[7px] px-[10px] md:absolute right-4 top-4 rounded-md">
          <p className="hidden md:inline">Save job</p>

          <Svg icon={"bookmark"} className={s.icons} />
        </li>
      </ul>

      {/* Second Section */}
      <div onClick={() => getJobDetails()} className="cursor-pointer">
        <p className="text-black-light dark:text-white text-BodyM3-400">
          {limit(job.job_description, 350)}
        </p>
      </div>

      {/* Third Section */}
      {job.job_required_skills && (
        <div className="flex gap-2 flex-wrap">
          {job.job_required_skills.map((item, index) => (
            <h4
              className="bg-natural-5 dark:bg-natural-grey py-[5px] px-[10px] rounded-md text-BodyM4-500"
              key={index}
            >
              {item}
            </h4>
          ))}
        </div>
      )}

      {/* Fourth Section */}
      <ol className="flex flex-col gap-8 items-center mt-4 md:gap-4 lg:flex-row lg:justify-between">
        <li className="flex text-BodyL-600 gap-4">
          <div className="flex">
            {job.job_max_salary && (
              <h5 className="text-black-1 dark:text-white">
                ${job.job_max_salary}k/{job.job_salary_period.toLowerCase()}
              </h5>
            )}
          </div>
        </li>

        <li className="flex gap-4">
          <Button
            title="Message"
            bgColor="bg-natural-color-6 px-8 dark:bg-black-bg-3"
            borderColor="dark:border-black-bg-3"
          />

          <Link href={job.job_apply_link} target="_blank">
            <Button
              title="Apply Now"
              bgColor="bg-primary-color"
              borderColor="dark:border-black-bg-3"
              textColor="text-white py-[12px] px-[52.5px]"
            />
          </Link>
        </li>
      </ol>
    </section>
  );
};

export default Cards;

const s = {
  icons: "h-[20px] w-[20px]",
};

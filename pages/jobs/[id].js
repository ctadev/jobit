import Image from "next/image";
import { JobInfo } from "../components/AvailableJobs";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { dateFormat } from "../../utils/dateFormat";
import { formatPrice } from "../../utils/formatPrice";
import { update } from "../../redux/currentCompanyDataSlice";
import Link from "next/link";
import Svg from "../components/jobsearch/svg";
import JobDetailsHeader from "../components/JobDetailsHeader";

// component:
const BlockInfoText = ({ paragragh, heading }) => (
  <>
    <p className="text-sm sm:mb-0 mb-2 text-natural-grey capitalize">
      {paragragh}
    </p>
    <h4 className="text-lg  font-semibold capitalize">{heading}</h4>
  </>
);

/* eslint-disable */
const JobDetails = () => {
  const [jobDetailData, setJobDetailData] = useState(null);
  const [similarJobs, setSimilarJobs] = useState(null);
  const [readMore, setReadMore] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const getCompanyDetails = () => {

    router.push({
      pathname: `/companydetails/${jobDetailData.data[0].employer_name.toLowerCase()}`,
    });
    dispatch(update(jobDetailData.data[0]));
  };

  const { id } = router.query;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const resp = async () =>
      await fetch(
        `https://jsearch.p.rapidapi.com/job-details?job_id=${
          id ? id : "mEafOCIoJ9gAAAAAAAAAAA=="
        }`,
        options
      )
        .then((response) => response.json())
        .then((response) => setJobDetailData(response))
        .catch((err) => console.error(err));
    resp();

    const response = async () =>
      await fetch(
        `https://jsearch.p.rapidapi.com/search?query=${jobDetailData?.data[0]?.job_title}&num_pages=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => setSimilarJobs(response))
        .catch((err) => console.error(err));
    response();
  }, [id]);

  if (jobDetailData) {
    const { data } = jobDetailData;
    return (
      <main className="bg-[#f0f3f3] dark:bg-dark-1 rounded-xl py-0 px-4  flex items-center justify-center">
        <div className="w-full max-w-[1440px]">
          <JobDetailsHeader />
          <Link
            href={"/job-search"}
            className="inline-flex mt-10 px-4 py-2 rounded-lg mb-5 sm:ml-8 lg:ml-0 ease-in-out bg-primary-color text-white hover:bg-white hover:text-primary-color hover:outline duration-200"
          >
            back to jobs
          </Link>

          {/* flex colums */}
          <section className="w-full sm:mx-auto rounded-xl lg:flex lg:gap-8 lg:place-content-between">
            {/* first column */}
            <div className="w-full p-5 bg-white flex-initial mb-10 rounded-xl dark:bg-black-bg-2 h-fit">
              <Image
                src="/banner.png"
                alt="Job details image"
                width={860}
                height={185}
                className="rounded-t-lg mb-10 w-full"
              />

              <ul className="flex justify-between items-center list-none mb-16">
                <li className="flex gap-[20px]">
                  <div
                    className="bg-natural-grey p-2 rounded-lg w-fit cursor-pointer h-fit shrink-0"
                    onClick={getCompanyDetails}
                  >
                    {jobDetailData.data[0].employer_logo ? (
                      <img
                        src={
                          jobDetailData.data[0].employer_logo ||
                          "https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/31.png"
                        }
                        referrerPolicy="no-referrer"
                        alt="logo"
                        width={40}
                        height={40}
                        className="object-contain inline-flex"
                      />
                    ) : (
                      <img
                        src="https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/31.png"
                        alt="logo"
                        referrerPolicy="no-referrer"
                        width={40}
                        height={40}
                        className="object-contain inline-flex"
                      />
                    )}
                  </div>
                  <div>
                    <h2 className="sm:text-lg sm:font-bold lg:text-2xl">
                      {jobDetailData.data[0].job_title}
                    </h2>
                    <p className="text-natural-grey">
                      {jobDetailData.data[0].job_city}
                      {jobDetailData.data[0].job_state}
                      {jobDetailData.data[0].job_country}
                      {dateFormat(
                        jobDetailData.data[0].job_posted_at_datetime_utc
                      )}
                    </p>
                  </div>
                </li>
                <li className="shrink-0">
                  <Link
                    href={jobDetailData.data[0].job_apply_link}
                    target={"_blank"}
                    className="bg-primary-color px-4 py-2 rounded-xl text-white self-center block ease-in-out hover:bg-white hover:text-primary-color hover:outline duration-200"
                  >
                    apply now
                  </Link>
                </li>
              </ul>

              <article className="py-2 px-1 bg-natural-2 rounded-lg mb-16 dark:bg-dark-1">
                <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 text-center sm:gap-4">
                  <div>
                    <BlockInfoText
                      paragragh="experience"
                      heading={`${
                        jobDetailData.data[0].job_required_experience
                          ?.required_experience_in_months / 12
                      } Years`}
                    />
                  </div>
                  <div>
                    <BlockInfoText
                      paragragh="work level"
                      heading="senior level"
                    />
                  </div>

                  <div>
                    <BlockInfoText
                      paragragh="employee type"
                      heading={jobDetailData.data[0].job_employment_type}
                    />
                  </div>
                  {jobDetailData.data[0].estimated_salaries[0]
                    ?.median_salary ? (
                    <div>
                      <BlockInfoText
                        paragragh="offer salary"
                        heading={formatPrice(
                          jobDetailData.data[0].estimated_salaries[0]
                            .median_salary
                        )}
                      />
                    </div>
                  ) : null}
                </div>
              </article>

              <div className="mb-16">
                <h3 className="text-lg capitalize font-bold mb-3">
                  about the job
                </h3>
                <p className="text-base text-natural-grey mb-8 tracking-wide leading-6">
                  {jobDetailData.data[0].job_description}
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-lg capitalize font-bold mb-3">
                  qualification and skill sets
                </h3>
                {jobDetailData.data[0]?.job_highlights?.Qualifications &&
                  jobDetailData.data[0]?.job_highlights?.Qualifications.map(
                    (item, index) => {
                      return (
                        <li
                          key={index}
                          className="text-base text-natural-grey mb-6"
                        >
                          {item}
                        </li>
                      );
                    }
                  )}
              </div>
              <hr className="mb-8" />
              <div>
                <h3 className="text-lg capitalize font-bold mb-10">
                  about the company
                </h3>

                <ul className="flex justify-between items-center list-none mb-16">
                  <li className="flex gap-[20px]">
                    <div className="bg-natural-grey p-2 rounded-lg w-fit cursor-pointer h-fit" onClick={getCompanyDetails}>
                    {jobDetailData.data[0].employer_logo ? (
                      <img
                        src={
                          jobDetailData.data[0].employer_logo ||
                          "https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/31.png"
                        }
                        referrerPolicy="no-referrer"
                        alt="logo"
                        width={40}
                        height={40}
                        className="object-contain inline-flex"
                      />
                    ) : (
                      <img
                        src="https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/31.png"
                        alt="logo"
                        referrerPolicy="no-referrer"
                        width={40}
                        height={40}
                        className="object-contain inline-flex"
                      />
                    )}
                    </div>
                    <div onClick={getCompanyDetails}>
                      <h2 className="sm:text-lg sm:font-bold lg:text-2xl self-center">
                        {jobDetailData.data[0].employer_name}
                      </h2>
                    </div>
                  </li>
                  <li>
                    <Link
                      href={jobDetailData.data[0].job_google_link}
                      target="_blank"
                      className="inline-flex px-2 py-1 rounded-lg border-solid border-2 follow-btn-icon self-start capitalize ease-in-out hover:bg-white hover:text-primary-color hover:outline duration-200"
                    >
                      <Image
                        src="/plus.png"
                        width={15}
                        height={15}
                        alt="plus icon"
                        className="mr-2 object-contain follow-btn-icon"
                      />
                      google link
                    </Link>
                  </li>
                </ul>

                <p className="text-base text-natural-grey">
                  {readMore
                    ? jobDetailData.data[0].job_description
                    : `${jobDetailData.data[0].job_description.substring(
                        0,
                        400
                      )}...`}
                  <button
                    className="show-hide text-primary-color"
                    onClick={() => setReadMore(!readMore)}
                  >
                    {readMore ? " read less" : " read more"}
                  </button>
                </p>
              </div>
            </div>

            {/* second column */}
            <div className="w-full h-fit lg:w-[600px]">
              <h2 className="text-xl mb-4 capitalize font-bold">
                similar jobs
              </h2>
              {similarJobs ? (
                similarJobs.data.map((job, index) => (
                  <JobInfo key={index} job={job} />
                ))
              ) : (
                <main className="flex items-center justify-center mt-6  animate-spin w-full">
                  <Svg icon={"spinner"} className="h-[50px] w-[50px]" />
                </main>
              )}
            </div>
          </section>
        </div>
      </main>
    );
  } else {
    return (
      <main className="flex items-center justify-center mt-6  animate-spin w-full">
        <Svg icon={"spinner"} className="h-[50px] w-[50px]" />
      </main>
    );
  }
};

export default JobDetails;

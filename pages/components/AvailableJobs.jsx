import Link from "next/link";
import { dateFormat } from "../../utils/dateFormat";
import { useDispatch } from "react-redux";
import { update } from "../../redux/currentCompanyDataSlice";
import { useRouter } from "next/navigation";

export const JobInfo = ({ job }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const getCompanyDetails = () => {
    router.push({
      pathname: `/companydetails/${job.employer_name.toLowerCase()}`,
    });
    dispatch(update(job));
  };

  const getJobDetails = () => {
    router.push({
      pathname: `/jobs/${job.job_id}`,
    });
  };

  return (
    <article className="bg-white card rounded-lg mb-5 dark:bg-black-bg-2">
      <div className="flex flex-row card-header">
        <div className="flex">
          <div
            className="bg-natural-grey p-2 rounded-lg shrink-0 h-fit cursor-pointer"
            onClick={getCompanyDetails}
          >
            {job?.employer_logo ? (
              <img
                src={
                  job?.employer_logo ||
                  "https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/31.png"
                }
                referrerPolicy="no-referrer"
                width={42}
                height={42}
                alt="logo"
              />
            ) : (
              <img
                src="https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/31.png"
                referrerPolicy="no-referrer"
                width={42}
                height={42}
                alt="logo"
              />
            )}
          </div>
          <div className="flex-col cursor-pointer" onClick={getJobDetails}>
            <h5 className="h5">{job?.job_title}</h5>
            <p className="text-natural-grey">
              {job?.job_city}, {job?.job_country}
            </p>
          </div>
        </div>
        <h5 className="text-natural-grey text-base font-bold">
          {job?.job_salary_currency}
        </h5>
      </div>

      <div className="space-x flex flex-row">
        <p className="text-natural-grey">
          {`${dateFormat(job?.job_offer_expiration_datetime_utc)} left`}
        </p>
        <div className="flex space-x-3 align-center">
          {
            <img
              src={"/badge.png"}
              alt="badge"
              width={30}
              height={30}
              className="object-contain"
            />
          }

          <Link
            href={job?.job_apply_link}
            className="secondary-color rounded-lg ease-in-out hover:bg-white hover:text-primary-color hover:outline duration-200"
            target={"_blank"}
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
};

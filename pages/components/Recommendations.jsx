import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { update } from "../../redux/currentCompanyDataSlice";

const Recommendations = ({ data }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const getJobDetails = () => {
    router.push({
      pathname: `/jobs/${data.job_id}`,
    });
  };

  const limit = (string, length, end = "...") => {
    return string.length < length ? string : string.substring(0, length) + end;
  };

  const getCompanyDetails = () => {
    router.push({
      pathname: `/companydetails/${data.employer_name.toLowerCase()}`,
    });
    dispatch(update(data));
  };

  return (
    <main className="flex justify-between items-center dark:bg-black-bg-3 bg-natural-4 rounded-lg p-[14px] w-full md:w-[360px]">
      <section className="flex items-center gap-[9px] w-[156px] cursor-pointer">
        {data.employer_logo ? (
          <img
            src={
              data?.employer_logo ||
              "https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/31.png"
            }
            referrerPolicy="no-referrer"
            className="w-[48px] h-[48px] shrink-0 rounded-lg"
            onClick={() => getCompanyDetails()}
          />
        ) : (
          <img
            src="https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/31.png"
            className="w-[48px] h-[48px] shrink-0 rounded-lg"
            onClick={() => getCompanyDetails()}
          />
        )}
        <div
          className="flex flex-col gap-[4px] cursor-pointer"
          onClick={() => getJobDetails()}
        >
          <h1 className="text-xs">
            {data.job_title}
          </h1>
          <div className="text-xs flex gap-[4px] ">
            <p className="width-[50px] truncate">
              {data.employer_name && limit(data?.employer_name, 15)}
            </p>
            <p>{data.job_city && limit(data?.job_city, 10)}</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center">
        <div className="text-xs mb-2">
          {data.job_max_salary && (
            <h5 className="text-black-1 dark:text-white">
              ${data.job_max_salary}k / {data.job_salary_period.toLowerCase()}
            </h5>
          )}
        </div>
        <p className="text-xs">{data.job_employment_type}</p>
      </section>
    </main>
  );
};

export default Recommendations;

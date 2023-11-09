import Link from "next/link";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { CompanyDetailsCard, SimilarCompanyCard } from "../../components";

const CompanyDetails = () => (
  <main className="dark:bg-black-bg bg-natural-4 flex items-center justify-center">
    <div className="w-full h-full md:flex md:px-20 px-6">
      <div className="md:w-[60%]">
        <Link href="/">
          <button
            type="button"
            className="mt-12 flex items-center gap-3  text-[#92929D] px-3 py-2 rounded-lg dark:bg-[#21212B] bg-[#F1F1F5]"
          >
            <MdOutlineKeyboardArrowLeft className="text-2xl" />
            <p>Back</p>
          </button>
        </Link>
        <CompanyDetailsCard />
      </div>
      <div className="w-full lg:w-[35%]">
        <h1 className="font-bold px-4 text-[22px] mt-10 mb-8 dark:text-white">
          Similar Companies
        </h1>
        <SimilarCompanyCard number={0} />
        <SimilarCompanyCard number={1} />
        <SimilarCompanyCard number={2} />
        <SimilarCompanyCard number={3} />
        <SimilarCompanyCard number={4} />
        <SimilarCompanyCard number={5} />
        <SimilarCompanyCard number={6} />
        <SimilarCompanyCard number={7} />
      </div>
    </div>
  </main>
);

export default CompanyDetails;

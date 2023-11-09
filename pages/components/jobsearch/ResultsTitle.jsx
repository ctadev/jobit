import Svg from "./svg";

const ResultsTitle = ({ num }) => {
  return (
    <div className={s.title_container}>
      <h1 className={s.title}>
        Showing: <span className={s.title_span}>{num} Jobs</span>
      </h1>
      <div className={s.sort_container}>
        <p className={s.sort_list}>
          Sort By: <span className={s.sort_span}>Relevange</span>
        </p>
        <Svg icon="chevron" className={s.icons} />
      </div>
    </div>
  );
};

export default ResultsTitle;

const s = {
  icons: "w-[12px] h-[12px] text-natural-2",
  title_container: "flex items-center justify-between",
  title: "text-BodyL-600 text-natural-grey",
  title_span: " text-black dark:text-white",
  sort_container: "flex gap-4 items-center cursor-pointer",
  sort_list: "text-BodyM3-600 text-natural-grey",
  sort_span: "text-black-1 dark:text-white",
};

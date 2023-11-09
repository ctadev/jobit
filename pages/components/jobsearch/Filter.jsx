import { TypeFilter, ExperienceFilter, LocationFilter } from "./index";

const Filter = () => {
  return (
    <main className={s.filter_container}>
      <section className={s.create_job_card}>
        <div className={s.job_info}>
          <h3 className={s.title}>Create Job Alert</h3>
          <p className={s.description}>
            Increase an opportunity to get chance for new jobs.
          </p>
        </div>
        <input
          type="text"
          placeholder="Type Your Email"
          className={s.textBox}
        />
        <button
          className={s.btn}
          onClick={() => alert("Thanks for Subscribing")}
        >
          Create Job Alert
        </button>
      </section>

      <section className={s.filter_type_container}>
        <TypeFilter />
        <ExperienceFilter />
        <LocationFilter />
      </section>
    </main>
  );
};

export default Filter;

const s = {
  filter_container: "w-full lg:w-[300px] flex flex-col gap-8 rounded-lg",
  create_job_card:
    "p-[20px] flex flex-col gap-6 rounded-lg bg-[#FFFFFF] dark:bg-black-bg-2",
  job_info: "",
  title: "text-BodyM1-600 text-[#000700] dark:text-white",
  description: "w-[60%] sm:w-full text-BodyM2-400 text-natural-3",
  textBox:
    "placeholder:text-[13px] py-[11px] pl-[20px] w-full bg-natural-5 rounded-md text-black",
  btn: "w-full h-[44px] border border-primary-color rounded-md text-primary-color",
  filter_type_container: "hidden lg:flex flex-col gap-4",
};

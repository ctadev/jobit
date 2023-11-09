import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import Svg from "./svg";
import { FilterLevelJob } from "../../../redux/apiSlice";
import { levelData } from "./constant";
import { Checkbox } from "./index";

const ExperienceFilter = () => {
  const [toggleFilter, setToggleFilter] = useState(true);

  const [checkboxValues, setCheckBoxValues] = useState([]);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setCheckBoxValues((prev) => [...prev, value]);
    } else {
      setCheckBoxValues((prev) => {
        return [...prev.filter((job) => job !== value)];
      });
    }
  };

  useEffect(() => {
    dispatch(
      FilterLevelJob({
        experience: checkboxValues.join(", "),
      })
    );
  }, [checkboxValues]);

  return (
    <>
      <section
        className={
          toggleFilter
            ? s.filters_card_container
            : s.filters_card_container_hidden
        }
      >
        <div className={s.filter_card}>
          <div
            className={s.filter_header}
            onClick={() => setToggleFilter(!toggleFilter)}
          >
            <h1 className={s.filter_header_title}>Experience Level</h1>
            <Svg
              icon="chevron"
              className={
                toggleFilter ? `${s.icons_main} ${s.icons_open}` : s.icons_main
              }
            />
          </div>

          <ul
            className={
              toggleFilter
                ? `${s.filter_list_main_style} ${s.filter_list_show}`
                : `${s.filter_list_main_style} ${s.filter_list_hidden}`
            }
          >
            {levelData?.map((item, index) => (
              <Checkbox
                key={index}
                name={item.name}
                value={item.value}
                amount={item.amount}
                handleChange={handleChange}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ExperienceFilter;

const s = {
  filters_card_container: "hidden sm:flex flex-col gap-8 h-fit mb-6",
  filters_card_container_hidden: "hidden sm:flex flex-col gap-2",
  filter_card: "",
  icons_main: "h-5 w-10 left-6 top-7 text-natural-grey transition-all",
  icons_open: "rotate-180",
  filter_header: "flex justify-between items-center cursor-pointer",
  filter_header_title: "",

  filter_list_main_style: "flex flex-col transition-all duration-400",
  filter_list_show: "gap-2 mt-4 max-h-[400px]",
  filter_list_hidden: "max-h-0 mt-0 gap-0 overflow-hidden",

  filter_list_items: "flex justify-between cursor-pointer",
  filter_list_inputs: "flex gap-4",
  amount:
    "px-[6px] py-[2px] rounded-md bg-natural-4 dark:bg-natural-grey text-sm",
};

import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import Svg from "./svg";
import { FilterTypeJob } from "../../../redux/apiSlice";
import Checkbox from "./Checkbox";
import { typeData } from "./constant";

const TypeFilter = () => {
  const [toggleFilter, setToggleFilter] = useState(true);

  const [checkboxValues, setCheckBoxValues] = useState([]);
  const [remoteBox, setRemoteBox] = useState(false);

  const dispatch = useDispatch();

  const handleRemote = (event) => {
    const { checked } = event.target;

    if (checked) {
      setRemoteBox(true);
    } else {
      setRemoteBox(false);
    }
  };

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
      FilterTypeJob({
        type: checkboxValues.join(", "),
        remote: remoteBox,
      })
    );
  }, [checkboxValues, remoteBox]);

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
            <h1 className={s.filter_header_title}>Type of Employment</h1>
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
            {typeData?.map((checkbox, index) => (
              <Checkbox
                key={index}
                name={checkbox.name}
                value={checkbox.value}
                amount={checkbox.amount}
                handleChange={handleChange}
              />
            ))}

            <Checkbox
              name="Remote"
              value="remote"
              amount={142}
              handleChange={handleRemote}
            />
          </ul>
        </div>
      </section>
    </>
  );
};

export default TypeFilter;

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

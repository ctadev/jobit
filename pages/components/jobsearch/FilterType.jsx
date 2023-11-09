import { useState, useEffect } from "react";

import Svg from "./svg";
import Checkbox from "./Checkbox";
import { searchJob } from "../../../redux/apiSlice";
import { useDispatch } from "react-redux";

const FilterType = ({ data }) => {
  const [toggleFilter, setToggleFilter] = useState(data.toggle || false);

  return (
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
          <h1 className={s.filter_header_title}>{data.title}</h1>
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
          {data.items.map((item, index) => (
            <Checkbox item={item} index={index} key={index}/>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FilterType;

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
};

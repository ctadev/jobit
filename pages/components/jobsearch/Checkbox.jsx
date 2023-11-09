import { useState } from "react";

const Checkbox = ({ name, amount, handleChange, value }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <li className={s.filter_list_items}>
      <div className={s.filter_list_inputs}>
        <input
          type="checkbox"
          checked={toggleCheckBox}
          name={value}
          id={value}
          value={value}
          className="cursor-pointer"
          onChange={handleChange}
          onClick={() => setToggleCheckBox(!toggleCheckBox)}
        />
        <label htmlFor={value} className="cursor-pointer">
          {name}
        </label>
      </div>
      <h3 className={s.amount}>{amount}</h3>
    </li>
  );
};

export default Checkbox;

const s = {
  filter_list_items: "flex justify-between cursor-pointer",
  filter_list_inputs: "flex gap-4",
  amount:
    "px-[6px] py-[2px] w-[35px] flex items-center justify-center rounded-md bg-natural-4 dark:bg-natural-grey text-sm",
};

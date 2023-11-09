const RadioButton = ({ name, amount, handleChange, value, title, id }) => {
  return (
    <li className={s.filter_list_items}>
      <div className={s.filter_list_inputs}>
        <input
          type="radio"
          name={name}
          id={id}
          value={value}
          className="cursor-pointer"
          onClick={handleChange}
        />
        <label htmlFor={id} className="cursor-pointer">
          {title}
        </label>
      </div>
      <h3 className={s.amount}>{amount}</h3>
    </li>
  );
};

export default RadioButton;

const s = {
  filter_list_items: "flex justify-between cursor-pointer",
  filter_list_inputs: "flex gap-4",
  amount:
    "px-[6px] py-[2px] text-center w-[35px] rounded-md bg-natural-4 dark:bg-natural-grey text-sm",
};

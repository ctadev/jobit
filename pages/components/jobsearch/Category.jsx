import React from "react";
import Svg from "./svg";

const Category = () => {
  return (
    <main>
      <header>
        <h1>Type Of Employment</h1>
        <Svg icon="chevron" classNames={s.icons} />
      </header>

      <ul>
        <li> 
          <div>
            <input type="checkbox" />
            <p>Full-Time</p>
          </div>

          <p>123</p>
        </li>
      </ul>
    </main>
  );
};

export default Category;

const s = {
  icons: "h-6 w-6",
};

import React from "react";
import { Filter, Results, Header } from "./index";

const Body = () => {
  return (
    <>
      <Header />
      <main className={s.body_container}>
        <section className={s.left_containter}>
          <Filter />
        </section>

        <section className={s.right_container}>
          <Results />
        </section>
      </main>
    </>
  );
};

export default Body;

const s = {
  body_container:
    "flex flex-col items-center lg:flex-row lg:items-start gap-[80px] max-w-[1440px] mx-auto px-[27px] md:px-[80px] py-[52px]",
  left_containter: "rounded-lg w-full lg:w-[400px]",
  right_container: "grow",
};

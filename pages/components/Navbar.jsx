import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FaSun } from "react-icons/fa";
import { BsFillMoonFill } from "react-icons/bs";

import images from "../../assets";
import { SignIn } from "../components";

const MenuItems = ({ isMobile, active, setActive }) => {
  const generateLink = (i) => {
    switch (i) {
      case 0:
        return "/";
      case 1:
        return "/salaries";
      case 2:
        return "/job-search";
      default:
        return "/";
    }
  };

  return (
    <ul
      className={`list-none flexCenter flex-row ${
        isMobile ? "flex-col h-full" : undefined
      }`}
    >
      {["Overview", "Estimated Salaries", "Search Jobs"].map((item, i) => (
        <li
          key={i}
          onClick={() => {
            setActive(item);
          }}
          className={`flex-row items-center font-poppins font-semibold text-base dark:hover:text-primary-color hover:text-primary-color mx-3 
                ${
                  active === item
                    ? "dark:text-white text-dark-1"
                    : "dark:text-white text-dark-1"
                }`}
        >
          <Link href={generateLink(i)}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  return (
    <nav className="flex w-full fixed z-10 p-4 border-b dark:bg-black-bg-3 bg-white-1 dark:border-black-bg-2 border-natural-2 justify-between">
      <div className="flex flex-row justify-start">
        <Link href="/">
          <div
            className="md:px-10 md:flex hidden md:cursor-pointer"
            onClick={() => {}}
          >
            <Image
              src={images.logo}
              objectFit="contain"
              width={32}
              height={32}
              alt="logo"
            />
            <p className="dark:text-primary-color text-primary-color items-center px-1 font-poppins text-xl ml-1">
              JOBIT
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className="md:hidden flex">
            <Image
              src={images.logo}
              objectFit="contain"
              width={32}
              height={32}
              alt="logo"
            />
          </div>
        </Link>
      </div>
      <div className="md:flex md:flex-row md:justify-start hidden">
        <Link href="/">
          <div className="px-2 dark:text-primary-color text-primary-color no-underline hover:underline">
            Overview
          </div>
        </Link>
        <Link href="/salaries">
          <div className="px-2 dark:text-primary-color text-primary-color no-underline hover:underline">
            Estimated Salaries
          </div>
        </Link>
        <Link href="/job-search">
          <div className="px-2 dark:text-primary-color text-primary-color no-underline hover:underline">
            Job Search
          </div>
        </Link>
      </div>
      <div className="flex flex-initial flex-row px-3">
        <div className="mt-2 mx-[16px]">
          <BsFillMoonFill
            size="18px"
            style={{ display: "flex", justifyContent: "center" }}
          />
        </div>
        <div className="flex items-center mr-4">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => setTheme(theme === "light" ? "dark" : "light")}
          />
          <label
            htmlFor="checkbox"
            className="flexBetween w-8 h-4 dark:bg-black bg-natural-grey rounded-2xl p-1 relative label"
          >
            <div className="w-3 h-3 absolute bg-primary-color rounded-full ball" />
          </label>
        </div>
        <div className="mt-1.5">
          <FaSun
            size="20px"
            style={{ display: "flex", justifyContent: "center" }}
          />
        </div>

        <div className="flex md:hidden ml-4">
          {isOpen ? (
            <Image
              src={images.cross}
              objectFit="contain"
              width={20}
              height={20}
              alt="close"
              onClick={() => setIsOpen(false)}
              className={theme === "light" ? "filter invert" : null}
            />
          ) : (
            <Image
              src={images.menu}
              objectFit="contain"
              width={25}
              height={25}
              alt="menu"
              onClick={() => setIsOpen(true)}
              className={theme === "light" ? "filter invert" : null}
            />
          )}
          {isOpen && (
            <div className="fixed inset-0 top-65 dark:bg-black-bg-3 bg-white-1 z-10 nav-h flex justify-between flex-col">
              <div className="flex-1 p-4">
                <MenuItems active={active} setActive={setActive} isMobile />
              </div>
            </div>
          )}
        </div>
        <div className="px-4">
          <SignIn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

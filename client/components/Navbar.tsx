"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { navLinks } from "../constants";
import { logo, menu, search, thirdweb } from "@public/assets";
import { useStateContext } from "../context/StateContext";
import CustomButton from "./CustomButton";

// Assuming you have a custom button component


// Assuming you have a context for managing wallet connection


const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();

  return (
    <nav className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
        <input
          type="text"
          placeholder="Search for campaigns"
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none"
        />

        <button className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
          <Image
            src={search || "/placeholder.svg"}
            alt="search"
            width={15}
            height={15}
          />
        </button>
      </div>

      <div className="sm:flex hidden flex-row justify-end gap-4">
        <CustomButton
          btnType="button"
          title={address ? "Create a campaign" : "Connect"}
          styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
          handleClick={() => {
            if (address) router.push("/create-campaign");
            else connect();
          }}
        />

        <Link
          href="/profile"
          className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer"
        >
          <Image
            src={thirdweb || "/placeholder.svg"}
            alt="user"
            width={31}
            height={31}
          />
        </Link>
      </div>

      {/* Small screen navigation */}
      <div className="sm:hidden flex justify-between items-center relative">
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <Image
            src={logo || "/placeholder.svg"}
            alt="user"
            width={24}
            height={24}
          />
        </div>

        <button
          onClick={() => setToggleDrawer((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <Image
            src={menu || "/placeholder.svg"}
            alt="menu"
            width={34}
            height={34}
            className="object-contain cursor-pointer"
          />
        </button>

        <div
          className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${
            !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
          } transition-all duration-700`}
        >
          <ul className="mb-4">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 ${
                  isActive === link.name && "bg-[#3a3a43]"
                }`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  router.push(link.href);
                }}
              >
                <Image
                  src={link.imgUrl || "/placeholder.svg"}
                  alt={link.name}
                  width={24}
                  height={24}
                  className={`object-contain ${
                    isActive === link.name ? "grayscale-0" : "grayscale"
                  }`}
                />
                <span
                  className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
                    isActive === link.name ? "text-[#1dc071]" : "text-[#808191]"
                  }`}
                >
                  {link.name}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex mx-4">
            <CustomButton
              btnType="button"
              title={address ? "Create a campaign" : "Connect"}
              styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
              handleClick={() => {
                if (address) router.push("/create-campaign");
                else connect();
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

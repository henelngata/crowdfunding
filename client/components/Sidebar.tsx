"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../constants";
import { logo } from "../public/assets";
import { UrlObject } from "url";

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center sticky top-5 h-[93vh]">
      <Link
        href="/"
        className="w-[52px] h-[52px] bg-[#2c2f32] rounded-[10px] flex justify-center items-center"
      >
        <Image
          src={logo || "/placeholder.svg"}
          alt="Crowdfunding logo"
          width={32}
          height={32}
        />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navLinks.map((link: any) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`w-[48px] h-[48px] rounded-[10px] ${
                  isActive ? "bg-[#2c2f32]" : ""
                } flex justify-center items-center`}
              >
                <Image
                  src={link.imgUrl || "/placeholder.svg"}
                  alt={link.name}
                  width={24}
                  height={24}
                  className={isActive ? "" : "grayscale"}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

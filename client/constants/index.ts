import { StaticImageData } from "next/image";
import { dashboard, createCampaign, profile, withdraw } from "../public/assets";

export interface NavLink {
  name: string;
  imgUrl: StaticImageData;
  href: string;
}

export const navLinks: NavLink[] = [
  {
    name: "Dashboard",
    imgUrl: dashboard,
    href: "/",
  },
  {
    name: "Create Campaign",
    imgUrl: createCampaign,
    href: "/create-campaign",
  },
  {
    name: "Profile",
    imgUrl: profile,
    href: "/profile",
  },
  {
    name: "Home",
    imgUrl: withdraw,
    href: "/home",
  },
];

"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo.png";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { IoHome } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { MdOutlineAccessTime } from "react-icons/md";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterestP } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

const Desktopnav = () => {
  const path = usePathname();
  const navbar = [
    { nav: "Home", href: "/" },
    { nav: "About", href: "/about" },
    { nav: "Services", href: "/services" },
    { nav: "Gallery", href: "/gallery" },
    { nav: "Contact", href: "/contact" },
  ];
  return (
    <main className="hidden xl:block mt-24 bg-black border-8 border-[#222] p-2">
      <div className="bg-black h-[48rem] w-[23rem] text-center flex flex-col items-center bg-opacity-20 gap-y-20">
        {/* logo */}
        <nav>
          <span>
            <Image src={Logo} width={300} height={200} alt="logo" />
          </span>
          <ul className="flex flex-col gap-2 justify-center cursor-pointer">
            {navbar.map((links) => (
              <li
                key={links.nav}
                className="flex gap-2 items-center pl-8 hover:pl-16 hover:transition-all"
              >
                <Link
                  href={links.href}
                  className={clsx("text-white text-base", {
                    "text-red-400": path === links.href,
                  })}
                >
                  {links.nav}
                </Link>
                <hr className="w-full font-thin border-slate-800 border-1" />
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-center">
          <span className="bg-[#161312] p-1">
            <IoHome className=" text-4xl text-white" />
          </span>

          <Button className="p-4 rounded-l-none w-56 h-11 rounded-r-none bg-[#371352]">
            BOOK ONLINE
          </Button>
          <span className="bg-[#161312] p-1">
            <MdOutlineAccessTime className="text-4xl text-white" />
          </span>
        </div>
        <footer className="flex flex-col gap-y-16">
          <div className="flex gap-2 cursor-pointer">
            <span className="bg-[#161312] p-1">
              <SlSocialFacebook className="text-2xl text-white" />
            </span>
            <span className="bg-[#161312] p-1">
              <FaXTwitter className="text-2xl text-white" />
            </span>
            <span className="bg-[#161312] p-1">
              <IoLogoInstagram className="text-2xl text-white" />
            </span>
            <span className="bg-[#161312] p-1">
              <FaPinterestP className="text-2xl text-white" />
            </span>
            <span className="bg-[#161312] p-1">
              <GrLinkedinOption className="text-2xl text-white" />
            </span>
          </div>

          <div className="text-md text-white">
            <p>&copy; 2023 develop by <span>DevBen</span> </p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Desktopnav;

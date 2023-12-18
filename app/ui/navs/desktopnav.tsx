"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo.png";
import { usePathname } from "next/navigation";
import clsx from "clsx";

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
    <main className="hidden xl:block ">
      <div className="bg-black h-[45rem] w-[25rem] text-center flex justify-center bg-opacity-80">
        {/* logo */}
        <nav>
          <span>
            <Image src={Logo} width={300} height={200} alt="logo" />
          </span>
          <ul className="flex flex-col gap-2 justify-center">
            {navbar.map((links) => (
              <li key={links.nav} className="flex gap-2 items-center pl-8 hover:pl-16 hover:transition-all">
                <Link
                  href={links.href}
                  className={clsx("text-white text-base", {
                    "text-red-400": path === links.href,
                  })}
                >
                  {links.nav}
                </Link>
                <hr className="w-full font-thin border-slate-800 border-1"/>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default Desktopnav;

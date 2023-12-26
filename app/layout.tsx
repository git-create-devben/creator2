import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Desktopnav from "./ui/navs/desktopnav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="body flex md:justify-center flex-col w-[100%] h-[100vh]  md:gap-18 md:flex-row ">
          <aside className="flex-none aside bg-fixed sticky h-[100vh] hidden md:block ">
            <Desktopnav />
          </aside>
          <div className="h-[100vh] ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

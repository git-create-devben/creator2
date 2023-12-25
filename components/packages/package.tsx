import React from "react";
// import img from "../../public/assets/bg.jpg"
import Image from "next/image";
import { Button } from "../ui/button";
export default function Packages() {
  const img =
    "https://frenify.com/work/envato/frenify/html/makeup/1/img/package1.jpg";
  const img2 =
    "https://frenify.com/work/envato/frenify/html/makeup/1/img/package2.jpg";

  const pack = [
    { text: "Makeup Consultation", price: "$19.00" },
    { text: "Signature Haircut & Style", price: "$25.00" },
    { text: "Airbrush Makeup", price: "$31.00" },
    { text: "False Lash Application", price: "$24.00" },
  ];

  const pack2 = [
    { text: "Makeup Consultation", price: "$19.00" },
    { text: "Event Makeup Application", price: "$35.00" },
    { text: "Benefit Lash Application", price: "$10.00" },
    { text: "Lip & Chin Wax", price: "$22.00" },
  ];
  return (
    <React.Fragment>
      <main className="flex gap-6 p-4 mt-10 flex-col lg:flex-row">
        <div className="bg-[#0f050e] h-[45rem]">
          <Image
            src={img}
            alt="package image"
            width={400}
            height={100}
            className=""
          />
          <div className="leading-3 text-center mt-10">
            <h3 className="text-lg text-[#eeeeeed8]">Party Makeup Package</h3>
            <span className="text-sm text-[#eeeeee8e]">
              Time Duration : 2 - 3 hours
            </span>
          </div>
          <div className="mt-8">
            {pack.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center text-lg text-[#eeeeee8e] bg-[#170d16] space-x-10 mt-2 p-4"
              >
                <span>{item.text}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
          <h4 className=" mt-6 text-center text-sm text-[#eeeeee8e]">
            Total <b>$99.00</b>
          </h4>
          <div className=" mt-8 flex justify-center items-center">
            <hr className="w-16 text-sm text-[#eeeeee8e]" />
            <Button className="rounded-l-none w-44 rounded-r-none bg-[#371352]">
              Book Online
            </Button>
            <hr className="w-16" />
          </div>
        </div>
        <div className="bg-[#0f050e] h-[45rem]">
          <Image
            src={img2}
            alt="package image"
            width={400}
            height={100}
            className=""
          />
          <div className="leading-3 text-center mt-10">
            <h3 className="text-lg text-[#eeeeeed8]">
              Commercial Makeup Package
            </h3>
            <span className="text-sm text-[#eeeeee8e]">
              Time Duration : 2 - 3 hours
            </span>
          </div>
          <div className="mt-8">
            {pack2.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center text-lg text-[#eeeeee8e] bg-[#170d16] space-x-10 mt-2 p-4"
              >
                <span>{item.text}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
          <h4 className=" mt-6 text-center text-sm text-[#eeeeee8e]">
            Total <b>$99.00</b>
          </h4>
          <div className=" mt-8 flex justify-center items-center">
            <hr className="w-16 text-sm text-[#eeeeee8e]" />
            <Button className="rounded-l-none w-44 rounded-r-none bg-[#371352]">
              Book Online
            </Button>
            <hr className="w-16" />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

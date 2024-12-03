import Image from "next/image";
import React from "react";

export default function Banner2() {
  return (
    <div className="px-[5vw] min-h-[100vh] flex items-center justify-center back">
      <div className="flex flex-col flex-1 h-full items-start justify-start text-start">
        <div className="flex flex-col space-y-3">
          <span className="text-[2.8vw] flex text-azure-600 font-bold leading-tight">
            Empower Your Business <br /> with Cloud Solutions
          </span>
          <div className="">
            <p className="">
              Unlock the potential of SAP S/4HANA Cloud and the SAP Business
              Technology Platform to drive growth and digital transformation in
              the midmarket.
            </p>
          </div>
          <div className="flex flex-row items-center justify-start space-x-6">
            <button className="px-3 py-2 bg-azure-600 rounded-[5px] text-white">Get started</button>
            <div className="w-[1px] h-[3rem] bg-gray-200"></div>
            <button className="text-azure-600">Learn more</button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-end p-14">
        <Image
          src={"/images/banner.png"}
          alt="Banner Image"
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>
    </div>
  );
}

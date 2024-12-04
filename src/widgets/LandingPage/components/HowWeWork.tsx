import React from "react";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GrDocumentPerformance } from "react-icons/gr";
import { AiOutlineGlobal } from "react-icons/ai";
import Titlebar from "@components/Titlebar";

export default function HowWeWork() {
  return (
    <div className="px-[5vw] py-[5vh] mb-[5vh] flex items-center justify-center flex-col space-y-7">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col space-y-4">
          <Titlebar title="OUR SPECIALIZE" className="text-azure-600" />
          <div className="">
            <h1 className="text-azure-600 font-semibold text-3xl font-unbounded">
              How We Work ?
            </h1>
          </div>
        </div>
        <div className="">
          <button className="hover:border border-azure-600 rounded-full px-3 py-2 bg-azure-600 text-white hover:bg-white hover:text-azure-600">See Services</button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 space-y-6 lg:space-y-0 px-4">
        <div className="flex w-full lg:w-2/4 flex-col items-center p-5 bg-white shadow-sm rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <div className="flex-shrink-0 bg-blue-100 p-4 rounded-full text-blue-500">
            <div className="bg-azure-50 p-3 rounded-full">
              <RiSecurePaymentLine className="text-3xl text-azure-600" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-1">
              <span className="text-lg font-semibold text-gray-800">
                Protect Customer Data
              </span>
            </div>
            <div>
              <span className="text-gray-600">
                Safeguard customer data across domains with seamless, one-click,
                fully managed HTTPS.
              </span>
            </div>
          </div>
        </div>

        <div className="flex w-full lg:w-2/4 flex-col items-center p-5 bg-white shadow-sm rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <div className="flex-shrink-0 bg-blue-100 p-4 rounded-full text-blue-500">
            <div className="bg-azure-50 p-3 rounded-full">
              <GrDocumentPerformance className="text-3xl text-azure-600" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-1">
              <span className="text-lg font-semibold text-gray-800">
                Enhanced Application Performance
              </span>
            </div>
            <div>
              <span className="text-gray-600">
                Speed up your app with Cloudflare’s optimizations and CDN,
                cutting load times by 2x.
              </span>
            </div>
          </div>
        </div>

        <div className="flex w-full lg:w-2/4 flex-col items-center p-5 bg-white shadow-sm rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <div className="flex-shrink-0 bg-blue-100 p-4 rounded-full text-blue-500">
            <div className="bg-azure-50 p-3 rounded-full">
              <AiOutlineGlobal className="text-3xl text-azure-600" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-1">
              <span className="text-lg font-semibold text-gray-800">
                Global-Scale High Availability
              </span>
            </div>
            <div>
              <span className="text-gray-600">
                Ensure reliability with Cloudflare's 193 data centers across 90
                countries.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { navItem } from "@utils/constants";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="p-5 w-full text-white">
      <div className="bg-azure-600 w-full rounded-[10px] p-10 flex flex-col gap-10">
        <div className="flex items-start justify-between gap-[5vw]">
          <div className="flex-1 flex-col flex gap-3">
            <span className="text-2xl">Halospect</span>
            <span className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
            </span>
            <div className="h-[1px] bg-white bg-opacity-40 w-full"></div>
            <span className="">Call: +1237654322</span>
            <div className="flex flex-row gap-2">
              <div className="p-2 rounded-[5px] bg-white">
                <FaFacebook className="text-azure-600 text-xl" />
              </div>
              <div className="p-2 rounded-[5px] bg-white">
                <FaInstagram className="text-azure-600 text-xl" />
              </div>
              <div className="p-2 rounded-[5px] bg-white">
                <FaLinkedinIn className="text-azure-600 text-xl" />
              </div>
              <div className="p-2 rounded-[5px] bg-white">
                <FaXTwitter className="text-azure-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="">UseFull Links</div>
            <div className="flex flex-col">
              {navItem?.map((item, index) => (
                <div key={index} className="flex items-start justify-start">
                  {"->  "}
                  <Link href={""}>{item?.title}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="">SAP Subscriptions</div>
            <div className="flex flex-col">
              {navItem?.map((item, index) => (
                <div key={index} className="flex items-start justify-start">
                  {"->  "}
                  <Link href={""}>{item?.title}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="">Products</div>
            <div className="flex flex-col">
              {navItem?.map((item, index) => (
                <div key={index} className="flex items-start justify-start">
                  {"->"}
                  <Link href={""}>{item?.title}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-100 bg-opacity-50"></div>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <span className="">2024 &copy; Halospect</span>
          </div>
          <div className="flex-1  flex items-center justify-end">
            <span className="">All rights reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
}

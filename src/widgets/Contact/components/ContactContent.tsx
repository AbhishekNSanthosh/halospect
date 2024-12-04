import Titlebar from "@components/Titlebar";
import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactContent() {
  return (
    <div className="px-[5vw] py-10 h-auto pt-[120px] w-full flex flex-col space-y-14 pb-[13vh]">
      <div className="w-full items-center justify-center flex">
        <Titlebar
          title="Contact us"
          className="text-azure-600 font-semibold text-2xl"
        />
      </div>
      <div className="flex flex-row space-x-14">
        <ContactInfo/>
        <ContactForm/>
      </div>
    </div>
  );
}

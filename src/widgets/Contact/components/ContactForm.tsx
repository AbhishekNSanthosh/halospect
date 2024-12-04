import React from "react";

export default function ContactForm() {
  return (
    <div className="flex-1">
      <div className="border border-azure-300 flex flex-col p-6 rounded-[10px] text-gray-700 space-y-3">
        <div className="flex flex-col space-y-1">
          <span className="font-semibold text-xl text-azure-600">Send us a message</span>
          <span className="">
            Your email address will not be published. Required fields are marked
            *
          </span>
        </div>
        <div className="">
            <textarea name="" id="" rows={5} placeholder="Message" className="w-full placeholder:text-azure-500 bg-azure-50 rounded-lg outline-none border-none p-3"></textarea>
        </div>
        <div className="flex flex-row space-x-2">
            <input type="text" className="w-full px-2 py-3 outline-none border-none bg-azure-50 rounded-lg placeholder:text-azure-500" placeholder="Name" />
            <input type="text" className="w-full px-2 py-3 outline-none border-none bg-azure-50 rounded-lg placeholder:text-azure-500" placeholder="Name" />
            <input type="text" className="w-full px-2 py-3 outline-none border-none bg-azure-50 rounded-lg placeholder:text-azure-500" placeholder="Name" />
        </div>
        <div className="">
            <button className="bg-azure-600 text-white outline-none border-none rounded-md w-full py-2">Submit</button>
        </div>
      </div>
    </div>
  );
}

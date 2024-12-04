import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function ContactInfo() {
  return (
    <div className="flex-1 flex flex-col space-y-8 text-gray-700">
      <div className="flex flex-col space-y-3">
        <span className="text-2xl font-semibold text-azure-600">How we can help you?</span>
      <span className="">
        Send a message through the given form, If your enquiry is time sensitive
        Kindly refer to the contact details given below.
      </span>
      </div>
      <div className="flex flex-col space-y-8">
        <div className="">
          <div className="flex flex-row space-x-4">
            <div className="flex items-center justify-center">
              <div className="p-4 bg-azure-50 rounded-full">
                <FaLocationDot className="text-azure-600 text-2xl" />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-xl font-semibold">Address</span>
              <span className="">Punnapra | Alappuzha-688004, Kerala</span>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-row space-x-4">
            <div className="flex items-center justify-center">
              <div className="p-4 bg-azure-50 rounded-full">
                <FaPhoneAlt className="text-azure-600 text-2xl" />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-xl font-semibold">Phone</span>
              <span className="">+82 123456789</span>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-row space-x-4">
            <div className="flex items-center justify-center">
              <div className="p-4 bg-azure-50 rounded-full">
                <IoMail className="text-azure-600 text-2xl" />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-xl font-semibold">Email</span>
              <span className="">info@halospect.in</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Titlebar from "@components/Titlebar";
import React from "react";

export default function VideoSection() {
  return (
    <div className="px-[5vw] pb-[10vh]">
      <div className="pb-5">
        <Titlebar title="About us" className="text-azure-600 mb-4" />
      </div>
      
      <div className="flex flex-col md:flex-row gap-[5vw]">
        {/* Left section with content */}
        <div className="flex flex-col items-start justify-start space-y-6 md:w-1/2">
          <h1 className="text-azure-600 font-semibold text-4xl font-unbounded">
            Confidence in the Cloud
          </h1>
          <p className="text-justify font-normal text-gray-600 text-base md:w-3/4">
            Our platform ensures robust data protection through access controls,
            encryption, and regular SOC2 attestations, while maintaining GDPR
            compliance.
          </p>
          
          <div className="w-full h-[1px] bg-gray-300 my-6"></div>

          <div className="flex gap-10">
            <div className="space-y-2">
              <div className="text-xl font-semibold">25K+</div>
              <div className="text-sm text-gray-600">Successfully completed projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-xl font-semibold">5K+</div>
              <div className="text-sm text-gray-600">Satisfied clients</div>
            </div>
          </div>

          <button className="px-6 py-3 bg-azure-600 text-white outline-none border-none rounded-[5px] hover:bg-azure-700 transition-all duration-300 mt-6">
            Get Started
          </button>
        </div>

        {/* Right section with video */}
        <div className="relative w-full md:w-1/2 mt-6 md:mt-0">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/VCPGMjCW0is?si=EU0BZR2ZA8mu23Q1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

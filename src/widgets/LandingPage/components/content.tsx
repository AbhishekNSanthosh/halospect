import Image from "next/image";
import React from "react";

export default function LandingPageContent() {
  return (
    <div className="relative min-h-[100vh] flex items-center justify-center text-white">
      {/* Background Image */}
      <Image 
        src={"/images/group1.png"} 
        layout="fill" 
        objectFit="cover" 
        alt="Background Image"
        className="w-full h-full"
      />

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1F75FE] to-[#0b55ea] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-radial from-[#1F75FE]/60 to-transparent opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-bold mb-4 text-shadow-xl">Empower Your Business with Cloud Solutions</h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-shadow-md">
          Unlock the potential of SAP S/4HANA Cloud and the SAP Business Technology Platform to drive growth and digital transformation in the midmarket.
        </p>
        <button className="px-6 py-3 bg-[#1F75FE] hover:bg-[#0b55ea] rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:scale-105">
          Get Started Today
        </button>
      </div>
    </div>
  );
}

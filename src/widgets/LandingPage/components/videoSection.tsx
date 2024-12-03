import React from "react";

export default function videoSection() {
  return (
    <div className="px-[5vw] py-[10vh] flex flex-row gap-[5vw]">
      <div className="flex flex-col items-start justify-center space-y-5 ">
        <h1 className="text-azure-600 font-semibold text-3xl">Confidence in the Cloud</h1>
        <p className="text-justify font-normal text-gray-700">
          A strong focus on design-driven security and privacy is essential.{" "}
          <br />
          <br />
          Our platform ensures continuous protection of customer data through
          features like robust access controls, data encryption both at rest and
          in transit, as well as comprehensive security development and testing.
          <br />
          <br />
          Additionally, we conduct regular SOC2 attestations, providing
          independent assessments of our SaaS security controls.
          <br />
          <br />
          The platform is also fully GDPR-compliant, helping customers meet
          stringent data protection requirements.
        </p>
        <button className="px-3 py-2 bg-azure-600 text-white outline-none border-none rounded-[5px]">Get Started</button>
      </div>
      <div className="">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gWeZZsmPalQ?si=yeHHS4iAL67-YyU7"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

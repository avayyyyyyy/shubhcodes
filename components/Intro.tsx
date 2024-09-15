import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-4">
      <div className="w-full md:w-2/3 lg:w-10/12 flex flex-col gap-4">
        <h1 className="text-3xl lg:flex block sm:text-4xl font-bold mb-2 md:mb-4 text-center md:text-left">
          <div>Hii! </div>
          <div>I&apos;m Shubhankit Jain 👋</div>
        </h1>
        <p className="text-sm md:text-base text-primary/80 text-center sm:text-left">
          Seasoned Fullstack Engineer with 3+ years of experience in building
          WebApps. I excel in building applications from scratch to
          production-ready. My expertise spans across frontend, backend, and
          full-stack development, with a small knack for deployment.
        </p>
      </div>
      <div className="w-full sm:w-1/3 lg:w-3/12 flex justify-center sm:justify-center">
        <Image
          src="/Shubhankit.png"
          alt="Profile Picture"
          width={100}
          height={100}
          className="rounded-full border border-secondary h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36"
        />
      </div>
    </div>
  );
};

export default Intro;

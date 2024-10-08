import Image from "next/image";
import React from "react";
import CopyCLI from "./CopyCLI";

const Intro = () => {
  return (
    <div className="flex z-50 flex-col-reverse md:flex-row items-center md:items-start gap-4">
      <div className="w-full md:w-2/3 lg:w-10/12 flex flex-col gap-4">
        <h1 className="text-3xl lg:flex lg:flex-wrap lg:gap-x-3 block sm:text-4xl font-bold mb-2 md:mb-4 text-center md:text-left">
          <div>Hola!</div>
          <div>I&apos;m Shubhankit Jain 👋</div>
        </h1>
        <p className="text-sm md:text-base text-primary/80 text-center sm:text-left">
          Seasoned Fullstack Engineer with 3+ years of experience in building
          WebApps. I excel in building applications from scratch to
          production-ready. My expertise spans across frontend, backend, and
          full-stack development, with a small knack for deployment.
        </p>
        <CopyCLI />
      </div>
      <div className="w-full sm:w-1/3 lg:w-4/12 flex justify-center sm:justify-center">
        <Image
          src="/Shubhankit.png"
          alt="Profile Picture"
          width={500}
          height={500}
          className="rounded-full border border-secondary h-24 w-24 sm:h-28 z-50 sm:w-28 lg:h-36 lg:min-w-36"
        />
      </div>
    </div>
  );
};

export default Intro;

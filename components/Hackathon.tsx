import React from "react";
import { CodeIcon, ComputerIcon, GlobeIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export interface HackathonCardProps {
  title: string;
  description: string;
  location: string;
  dates?: string;
  organisedBy?: string;
  logo?: React.ReactNode;
  links?: {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
  isWon?: boolean;
}

const HackathonCard = ({
  experience,
  icon,
}: {
  experience: HackathonCardProps;
  icon: React.ReactNode;
}) => (
  <li className="mb-10 ms-6">
    <span className="absolute flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-secondary rounded-full -start-2.5 sm:-start-3 ring-4 sm:ring-8 ring-secondary dark:ring-secondary dark:bg-secondary">
      {icon}
    </span>
    <h3 className="flex ml-2 items-center mb-1 md:text-lg text-base font-semibold text-gray-900 dark:text-white">
      {experience.title}
      {experience.isWon && (
        <span className="bg-secondary text-primary text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-secondary dark:text-primary ms-3">
          Won 🏆
        </span>
      )}
    </h3>
    <time className="mb-2 w-full flex text-sm font-normal leading-none text-primary/70 dark:text-primary/70">
      <div>{experience.organisedBy}</div> <span className="mx-2">-</span>{" "}
      <div>{experience.dates}</div>
    </time>
    <p className="mb-4 text-sm font-normal text-gray-500 dark:text-primary/70">
      {experience.description}
    </p>
    <div className="flex gap-2">
      {experience.links?.map((link, idx) => (
        <Button
          key={idx}
          asChild
          variant={"default"}
          disabled={!link.href}
          className={`bg-secondary text-primary ${
            link.href
              ? "hover:bg-primary hover:text-secondary"
              : "cursor-not-allowed opacity-50"
          }`}
        >
          {link.href ? (
            <Link href={link.href} target="_blank">
              <span className="ml-1 space-x-1 flex items-center justify-center">
                <span>{link.icon}</span> <span>{link.title}</span>
              </span>
            </Link>
          ) : (
            <span className="ml-1 space-x-1 flex items-center justify-center">
              <span>{link.icon}</span> <span>{link.title}</span>
            </span>
          )}
        </Button>
      ))}
    </div>
  </li>
);

const Hackathon = () => {
  return (
    <section id="hackathons">
      <div className="w-full ">
        <div className="flex flex-col items-center justify-center mb-10 space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary text-primary px-3 py-1 text-sm">
            Highlights
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            I like building things
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            During my time in university, I attended multiple hackathons. People
            from around the country would come together and build incredible
            things in 2-3 days.
          </p>
        </div>
        <div className="ml-3">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {DATA.hackathons.map((hackathon, id) => (
              <HackathonCard
                key={id}
                experience={hackathon}
                icon={hackathon.logo}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

const DATA = {
  hackathons: [
    {
      title: "GEN AI Hackathon 🚀",
      description:
        "I created a solution to help modern parents who struggle with coming up with new bedtime stories every day. The application, called 'StoryDev', uses GEN AI to allow parents to create fully customizable stories. StoryDev even includes a face-swapping feature through the LICA face swapping API.",
      location: "India",
      dates: "June 2024",
      organisedBy: "Paras Madan x Nas.io",
      logo: <ComputerIcon size={24} className="" />,
      links: [
        {
          icon: <CodeIcon className="mr-1" size={14} />,
          title: "Code",
          href: "https://github.com/avayyyyyyy/GenAI-Main",
        },
        {
          icon: <GlobeIcon className="mr-1" size={14} />,
          title: "Deployed",
          href: "https://main--storydev.netlify.app/",
        },
      ],
      isWon: true,
    },
    {
      title: "MUJ Hackx 2.0",
      description:
        "Built a Crowdsourced Disaster Reporting Tool with features like AI-driven detection and SOS, we aim to improve real-time disaster response.",
      location: "India",
      dates: "September 2024",
      organisedBy: "Manipal University, Jaipur",
      logo: <ComputerIcon size={24} className="" />,
      links: [
        {
          icon: <CodeIcon className="mr-1" size={14} />,
          title: "Code",
          href: "https://github.com/avayyyyyyy/MUJ-HACKX",
        },
        {
          icon: <GlobeIcon className="mr-1" size={14} />,
          title: "Not Deployed",
          href: "",
        },
      ],
      isWon: false,
    },
  ],
};

export default Hackathon;

import { Bot, GraduationCap } from "lucide-react";
import React from "react";

const workExperiences = [
  {
    title: "SDE Intern",
    company: "Merlin AI 🚀",
    companyUrl: "https://www.getmerlin.in/",
    date: "October, 2024 - Present",
    description:
      "Working on a project to create an AI-driven website assistant. I'm exploring the capabilities of Next.js to develop a user-friendly and intelligent tool.",
    isLatest: true,
  },
  {
    title: "Full Stack AI Developer 🧳",
    company: null,
    companyUrl: "https://github.com/avayyyyyyy",
    date: "May, 2024 - September, 2024",
    description:
      "I developed some highly intuitive AI applications for my clients, addressing their unique needs and challenges. Additionally, I worked on several personal SaaS projects, focusing on creating innovative and user-friendly applications to streamline various tasks and improve productivity.",
    isLatest: false,
  },
];

const educationExperiences = [
  {
    title: "Bachelor of Computer Application 🎓",
    institution: "Poornima University",
    institutionUrl: "https://www.poornima.edu.in/",
    date: "2022 - 2025",
    description:
      "I am currently enrolled in the Bachelor of Computer Applications (BCA) program at Poornima University, focusing on core areas like software development, data analysis, and artificial intelligence. The curriculum includes hands-on projects and internships, enhancing both my theoretical understanding and practical skills. This program is equipping me with the expertise needed to excel in the tech industry.",
    isLatest: false,
  },
];

interface Experience {
  title: string;
  company?: string | null;
  companyUrl?: string | null;
  institution?: string;
  institutionUrl?: string;
  date: string;
  description: string;
  isLatest: boolean;
}

const ExperienceItem = ({
  experience,
  icon,
}: {
  experience: Experience;
  icon: React.ReactNode;
}) => (
  <li className="mb-8 sm:mb-10 ms-4 sm:ms-6">
    <span className="absolute flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-secondary rounded-full -start-2.5 sm:-start-3 ring-4 sm:ring-8 ring-secondary dark:ring-secondary dark:bg-secondary">
      {icon}
    </span>
    <h3 className="flex flex-wrap ml-1 items-center mb-1 text-base sm:text-lg font-semibold text-primary dark:text-primary">
      {experience.title}
      {(experience.company || experience.institution) && (
        <>
          <span className="mx-1">@</span>
          <a
            href={experience.companyUrl || experience.institutionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 mx-1"
          >
            {experience.company || experience.institution}
          </a>
        </>
      )}
      {experience.isLatest && (
        <span className="bg-secondary text-xs sm:text-sm font-medium me-2 px-2 py-0.5 rounded dark:bg-secondary dark:text-primary ms-0 sm:ms-3 mt-1 sm:mt-0">
          Latest
        </span>
      )}
    </h3>
    <time className="block mb-2 text-xs sm:text-sm font-normal leading-none text-primary/80">
      {experience.date}
    </time>
    <p className="mb-4 text-sm sm:text-base font-normal text-primary/70">
      {experience.description}
    </p>
  </li>
);

const ExperienceSection = ({
  title,
  experiences,
  icon,
}: {
  title: string;
  experiences: Experience[];
  icon: React.ReactNode;
}) => (
  <div className="flex flex-col gap-4">
    <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
    <div className="px-2 sm:px-6">
      <ol className="relative border-s border-primary/50 dark:border-primary/70">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} icon={icon} />
        ))}
      </ol>
    </div>
  </div>
);

const WorkAndEducation = () => {
  return (
    <div className="flex flex-col gap-8">
      <ExperienceSection
        title="Work Experience"
        experiences={workExperiences}
        icon={<Bot size={14} className="sm:w-4 sm:h-4" />}
      />
      <ExperienceSection
        title="Education"
        experiences={educationExperiences}
        icon={<GraduationCap size={14} className="sm:w-4 sm:h-4" />}
      />
    </div>
  );
};

export default WorkAndEducation;

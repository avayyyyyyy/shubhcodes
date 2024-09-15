import { Code, Globe } from "lucide-react";
import Image from "next/image";
import React from "react";
import AnimatedGradientText from "./magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Define the props for the ProjectCard
interface ProjectProps {
  image: string;
  name: string;
  trending: boolean;
  techStack: string[];
  shortDesc: string;
  date: string;
  Github: string;
  LiveLink: string;
}

// ProjectCard component to display individual project details
function ProjectCard({
  i,
  name,
  image,
  date,
  shortDesc,
  tags,
  Github,
  trending,
  LiveLink,
}: {
  i: number;
  name: string;
  image: string;
  date: string;
  shortDesc: string;
  tags: string[];
  Github: string;
  trending: boolean;
  LiveLink: string;
}) {
  return (
    <>
      <div className="max-w-sm mb-10 hover:shadow-md flex flex-col justify-between mx-auto border border-primary/10 duration-100 rounded-md py-4 px-3">
        <div>
          <div>
            <Image
              width={900}
              height={900}
              className="rounded-lg"
              src={image}
              alt=""
            />
          </div>
          <div>
            {trending && (
              <AnimatedGradientText className="mt-3 w-fit text-start">
                🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  #{++i} Best
                </span>
              </AnimatedGradientText>
            )}
            <div className="font-semibold text-sm mt-2 ">{name}.</div>
          </div>
          <div className="text-xs text-primary/70 mb-2 mt-1">{date}</div>
          <div className="text-xs text-primary/70">
            <div>{shortDesc}</div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 my-4">
            {tags.map((e: string) => {
              return (
                <div
                  key={e}
                  className="text-xs text-primary rounded-md bg-secondary px-2 py-1"
                >
                  {e}
                </div>
              );
            })}
          </div>
          <div className="flex gap-2">
            <Link target="_blank" className="flex gap-2" href={LiveLink}>
              <div className="bg-secondary hover:bg-secondary/80 flex gap-2 items-center  text-primary w-fit px-3 py-1.5  rounded-md  text-xs">
                {" "}
                <Globe size={16} /> Website
              </div>
            </Link>

            <Link target="_blank" className="flex gap-2" href={Github}>
              <div className="bg-secondary hover:bg-secondary/80 flex gap-2 items-center  text-primary w-fit px-3 py-1.5  rounded-md  text-xs">
                {" "}
                <Code size={16} />
                Code
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

// Projects component to list all projects
const Projects = () => {
  const data: ProjectProps[] = [
    {
      image: "https://utfs.io/f/9e53247a-090e-4b56-ae1e-03c9e4bff653-md47.png",
      name: "Opinify - Feedback Collection SaaS",
      trending: true,
      techStack: ["NextJS", "Prisma", "Typescript", "Firebase", "TailwindCSS"],
      shortDesc:
        "Opinify is a feedback collection platform where users can embed a code in their website to collect user feedbacks.",
      date: "August 2024",
      Github: "https://github.com/avayyyyyyy/opinify",
      LiveLink: "https://opinify.in/",
    },
    {
      image:
        "https://utfs.io/f/f41ae507-be30-4221-9809-97f80f78f847-lphjht.webp",
      name: "BaatSheet - Chat with PDF",
      trending: true,
      techStack: ["NextJS", "Langchain", "Pinecone", "Firebase", "Shadcn UI"],
      shortDesc:
        "BaatSheet is a platform that allows you to chat with your PDFs. It's an interactive way to communicate with your Documents.",
      date: "May 2024",
      Github: "https://github.com/avayyyyyyy/baatsheet",
      LiveLink: "https://baat-sheet.vercel.app/",
    },
    {
      image:
        "https://utfs.io/f/035b9037-8519-4d74-8e4d-0fbca39ab083-va0yy.webp",
      name: "Piggy Banker - Finance Tracking App",
      trending: true,
      techStack: [
        "NextJS",
        "Typescript",
        "Prisma",
        "Tanstack Query",
        "NextAuth",
      ],
      shortDesc:
        "It is a finance tracking app that helps you manage your money, track your expenses, and save more.",
      date: "Jan 2024",
      Github: "https://github.com/avayyyyyyy/piggy-banker",
      LiveLink: "https://piggy-banker.vercel.app/",
    },
    {
      image:
        "https://utfs.io/f/fabf40ec-956e-495e-83d7-24ac093cee60-qei8wt.webp",
      name: "Ape Armor - Custom case brand",
      trending: true,
      techStack: ["NextJS", "Typescript", "KindeAuth", "Shadcn UI", "Prisma"],
      shortDesc:
        "Your all-in-one solution for efficiently creating some cool custom back case for your iPhone.",
      date: "May 2024",
      Github: "https://github.com/avayyyyyyy/ApeArmor",
      LiveLink: "https://ape-armor.vercel.app/",
    },
    {
      image:
        "https://utfs.io/f/b199c915-585e-4897-a7a9-5b5612e499dd-zihdxl.webp",
      name: "Tweet Craft - AI Tweet Generator",
      trending: true,
      techStack: ["NextJS", "KindeAuth", "TailwindCSS"],
      shortDesc:
        "TweetCraft revolutionizes tweeting with AI-generated content! Input your topic, choose a mood, and voila - viral tweets at your fingertips.",
      date: "May 2024",
      Github: "https://github.com/avayyyyyyy/tweet-craft",
      LiveLink: "https://tweet-craft-iota.vercel.app/",
    },
    {
      image:
        "https://utfs.io/f/4b474f0e-382b-4ef0-aa9e-c1571a43daaf-q2nukk.webp",
      name: "Note Nest - Notes Taking App",
      trending: true,
      techStack: ["NextJS", "Typescript", "Prisma", "Shadcn UI", "KindeAuth"],
      shortDesc:
        "Created a complete Full Stack SAAS application using the latest Modern Framework called NextJs 14.",
      date: "Jan 2024",
      Github: "https://github.com/avayyyyyyy/abhi-saas",
      LiveLink: "https://note-nest-avay.vercel.app/",
    },
  ];

  return (
    <section id="projects">
      <div className="space-y-12 w-full pt-12">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary text-primary px-3 py-1 text-sm">
              My Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Check out my latest work
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;ve worked on a variety of projects, from simple websites to
              complex web applications. Here are a few of my favorites.
            </p>
          </div>
        </div>
        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[800px] mx-auto">
          {data.map((project, idx) => (
            <ProjectCard
              key={idx}
              i={idx}
              name={project.name}
              image={project.image}
              date={project.date}
              shortDesc={project.shortDesc}
              tags={project.techStack}
              Github={project.Github}
              trending={project.trending}
              LiveLink={project.LiveLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

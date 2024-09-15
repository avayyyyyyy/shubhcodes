import React from "react";
import { Badge } from "./ui/badge";

const Skills = () => {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {DATA.skills.map((skill, i) => (
            <Badge
              className="bg-primary-foreground text-primary hover:bg-secondary hover:shadow-sm"
              key={i}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

const DATA = {
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "ShadCN",
    "Pinecone",
    "Langchain",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL (Postgres)",
    "Prisma",
    "Tanstack Query",
    "REST APIs",
    "WebSocket",
    "Redis",
    "Kafka",
    "Vercel",
    "GitHub",
    "VS Code",
  ],
};

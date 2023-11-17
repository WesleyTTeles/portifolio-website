import React from "react";
import ProjectCard from "../ProjectCard";
import { projectsData } from "../../data/ProjectData";

export default function Freelancer() {
  return (
    <div id="freelancer" className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-[#000035] mb-10">Project</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-10 px-4">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            imgUrl={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

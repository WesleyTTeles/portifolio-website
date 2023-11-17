import React from "react";

export default function ProjectCard({ imgUrl, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-[400px] shadow-xl shadow-gray-400 rounded-xl ">
      <img
        src={imgUrl}
        alt="img"
        width={400}
        className="rounded-xl group-hover:opacity-10"
      />

      <div className="flex flex-col justify-center items-center py-5">
        <h5 className="text-xl font-semibold text-zinc-700">{title}</h5>
        <p className="text-center mt-2 px-2">{description}</p>
      </div>
    </div>
  );
}

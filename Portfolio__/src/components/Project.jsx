import React from "react";

const Project = ({ title, onClick }) => {
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-6 transition-all duration-200 cursor-pointer sm:flex hover:bg-gradient-to-r hover:from-indigo/20 hover:to-storm/20 hover:scale-[1.02] rounded-lg px-4 -mx-4"
        onClick={onClick}
      >
        <div>
          <p className="text-2xl">{title}</p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
    </>
  );
};

export default Project;

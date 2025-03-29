import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2 ">
      {[
        {
          title: "Student Result Portal",
          description:
            "In my final year. when our department result published. I developed this portal. So, can search thier the their fiends result",
          link: "https://result-portal-kappa.vercel.app/",
        },
        {
          title: "Advayu",
          description:
            "Help a startup to launch their landing page and product",
          link: "https://advayu.club/",
        },
      ].map((project) => (
        <div
          key={project.title}
          className="hover:shadow-lg border-dotted border-3 border-[#E0C994] bg-none rounded-lg p-4 ">
          <div className="space-y-6">
            <h3 className="text-lg font-bold">{project.title}</h3>

            <p className="mt-1 text-white font-bold mt-4">
              {project.description}
            </p>
            <Link
              href={project.link}
              target="_blank"
              className="mt-2 text-gray-400 font-black full">
              Visit Project
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

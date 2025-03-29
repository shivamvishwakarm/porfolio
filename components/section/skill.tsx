import React from "react";
import {
  FaNodeJs,
  FaDocker,
  FaLinux,
  FaReact,
  FaAws,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

const skillIcons = [
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <RiNextjsFill /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Linux", icon: <FaLinux /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
  { name: "MongoDB", icon: <BiLogoMongodb /> },
  { name: "TailwindCSS", icon: <RiTailwindCssFill /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3 /> },
];

function Skill() {
  return (
    <div className="">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-10">
        {skillIcons.map((skill, index) => (
          <div
            key={index}
            className="flex text-black md:text-5xl text-4xl  animate-floating items-center space-x-2">
            <p> {skill.icon}</p>

            <p className="mt-2 text-xl">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;

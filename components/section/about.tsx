import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const About = () => {
  return (
    <div className="">
      <p className="mt-2 text-white text-wrap ">
        I am Shivam Vishwakarma, a passionate full-stack developer with
        expertise in Node.js, React, Next.js, and MongoDB. I have hands-on
        experience in creating robust, scalable web applications and thrive in
        solving challenging problems with innovative solutions.
      </p>
      <div className="flex md:flex-row flex-col md:items-center  md:space-x-24 space-y-4 ">
        <Image
          className="rounded-[60px] glow mt-4"
          src="/shivam.jpeg"
          alt="shivam"
          width={350}
          height={20}
        />
        {/* social links */}
        <div className="flex flex-row space-x-4 items-center pl-32">
          <Link href={"https://github.com/shivamvishwakarm"}>
            <Github className="w-6 h-6 text-black text-glow" />
          </Link>
          <Link href={"https://www.linkedin.com/in/shivamvishwakarma-/"}>
            <Linkedin className="w-6 h-6 text-black text-glow" />
          </Link>
          <Link href={"https://x.com/shivam_visss"}>
            <Twitter className="w-6 h-6 text-black text-glow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

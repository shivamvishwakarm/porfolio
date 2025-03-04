"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";

export default function Portfolio() {
  const [selectedSection, setSelectedSection] = useState("About");

  const sections = ["About", "Skills", "Projects", "Contact"];

  const renderSectionContent = () => {
    switch (selectedSection) {
      case "About":
        return (
          <div>
            <p className="mt-2 text-white">
              I am Shivam Vishwakarma, a passionate full-stack developer with
              expertise in Node.js, React, Next.js, and MongoDB. I have hands-on
              experience in creating robust, scalable web applications and
              thrive in solving challenging problems with innovative solutions.
            </p>
            <div className="flex flex-row items-center space-x-24">
              {/* <Image
                className="rounded-[60px] glow mt-4"
                src="/shivam.jpeg"
                alt="shivam"
                width={350}
                height={20}
              /> */}
              {/* social links */}
              <div className="flex flex-row space-x-4 items-center">
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
      case "Skills":
        return (
          <div>
            <ul className="mt-4 grid grid-cols-2 gap-4">
              {[
                "JavaScript",
                "React",
                "Next.js",
                "Node.js",
                "TailwindCSS",
                "Firebase",
                "Prisma",
                "TypeScript",
              ].map((skill) => (
                <li
                  key={skill}
                  className="p-2 text-sm text-center bg-gray-100 rounded-lg text-gray-600">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        );
      case "Projects":
        return (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Student Result Portal",
                description:
                  "A Vercel-hosted platform to search and view results efficiently.",
                link: "https://result-portal-kappa.vercel.app/",
              },
              // {
              //   title: "Geo-location Coupons",
              //   description:
              //     "A platform for location-based coupon redemption using Next.js and Express.",
              //   link: "https://geo-coupons.example.com",
              // },
            ].map((project) => (
              <Card key={project.title} className="hover:shadow-lg">
                <CardContent>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="mt-1 text-gray-500">{project.description}</p>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="mt-2 text-teal-600">
                    Visit Project <ChevronRight className="ml-1" size={16} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      case "Contact":
        return (
          <div>
            <p className="mt-2">Feel free to reach out to me through:</p>
            <div className="mt-4 flex gap-4">
              <Link href="https://github.com/shivamvishwakarm" target="_blank">
                <Github className="mr-2" size={16} /> GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/shivamvishwakarma-/"
                target="_blank">
                <Linkedin className="mr-2" size={16} /> LinkedIn
              </Link>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#BD9AF4] to-[#70594C] text-white">
      <header className="p-4 text-center">
        <h1 className="text-3xl font-bold">Shivam Vishwakarma</h1>
        <p className="text-gray-300">
          Full-Stack Developer | Freelancer | IT Enthusiast
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <motion.nav
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}>
          {sections.map((section) => (
            <Button
              key={section}
              variant={selectedSection === section ? "secondary" : "default"}
              onClick={() => setSelectedSection(section)}>
              {section}
            </Button>
          ))}
        </motion.nav>
        <div className="mx-48">
          <h2 className="relative text-2xl font-bold w-48 pb-5 text-white ">
            {selectedSection}
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-white origin-bottom-left transform rotate-[-3deg]"></span>
          </h2>
          <section className="mt-8">{renderSectionContent()}</section>
        </div>
      </main>

      <footer className="mt-12 p-4 text-center text-sm text-white font-black">
        &copy; 2025 Shivam Vishwakarma. All rights reserved.
      </footer>
    </div>
  );
}

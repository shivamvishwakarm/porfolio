"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import About from "@/components/section/about";
import Skill from "@/components/section/skill";
import Projects from "@/components/section/projects";
import Contact from "@/components/section/contact";

export default function Portfolio() {
  const [selectedSection, setSelectedSection] = useState("About");

  const sections = ["About", "Skills", "Projects", "Contact"];

  const renderSectionContent = () => {
    switch (selectedSection) {
      case "About":
        return <About />;
      case "Skills":
        return <Skill />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
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
        <div className="lg:mx-48 mx-4 mt-6">
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

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { CgInfo } from "react-icons/cg";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>
        <CgInfo className="me-2" />
        About me
      </SectionHeading>
      <p className="mb-3">
        With a foundational background in
        <span className="font-medium">business trade</span> from my
        undergraduate studies, I embarked on a journey to follow my true calling
        in technology. This led me to complete a comprehensive training program
        in web and mobile development, where i honed my skills in
        <span className="font-medium">full-stack development</span>. What
        <span className="italic">captivates me most about programming</span> is
        the creative process and the thrill of problem-solving. There's a unique
        satisfaction in bringing ideas to life and unraveling complex
        challenges.

        My technical repertoire includes a strong command of
        <span className="font-medium">
          JavaScript, TypeScript and proficiency in frameworks and technologies
          such as React, React Native, Node.js (including Adonis framework and
          native implementations),VueJS and PostgreSQL
        </span>
        . I'm adept in both front-end and back-end development, ensuring a
        seamless integration across the full stack development.

        I'm on a constant quest for knowledge and skill enhancement, currently seeking a
        full-time role where I can contribute as a software and mobile app
        developer while continuing to grow professionally.
      </p>

      <p>
        <span className="italic">Outside the world of code</span>, I indulge in
        video gaming, movie-watching and staying active through sports. My
        curiosity also extends to personal development areas like investing and
        artificial intelligence. On a lighter note, I'm exploring the musical
        realm by learning to play the guitar.
      </p>
    </motion.section>
  );
}

'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { CgInfo } from 'react-icons/cg';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>
        <CgInfo className='me-2' />
        About me
      </SectionHeading>
      <p className='mb-3'>
        After graduating with a degree in <span className='font-medium'>trade</span>, I decided to pursue my passion for programming. I enrolled in a web/mobile
        developer formation and learned <span className='font-medium'>full-stack web development</span>.{' '}
        <span className='italic'>My favorite part of programming</span> is the creation part and problem-solving aspect. I{' '}
        <span className='underline'>love</span> the feeling of creation or finally figuring out a solution to a problem. My core stack is{' '}
        <span className='font-medium'>Javascript, Typescript, React, React Native, Next.js, Node.js (Adonis or native), VueJS and Postgresql</span>. I am also
        familiar with all front / back approach. I am always looking to learn new technologies. I am currently looking for a{' '}
        <span className='font-medium'>full-time position</span> as a software and mobile app developer.
      </p>

      <p>
        <span className='italic'>When I'm not coding</span>, I enjoy playing video games, watching movies, and make sport. I also enjoy{' '}
        <span className='font-medium'>learning new things</span>. I am currently learning about <span className='font-medium'>investing, ia and more</span>. I'm
        also learning how to play the guitar.
      </p>
    </motion.section>
  );
}

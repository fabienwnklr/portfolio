import React from 'react';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import drawerImg from '@/public/drawer.png';
import freeDrawingImg from '@/public/free-drawing.png';
import ethiclickImg from '@/public/ethiclick.png';
import geomatikaImg from '@/public/geomatika.png';
import mecamobileImg from '@/public/mecamobile.png';
import portfolioImg from '@/public/portfolio.png';

export const links = [
  {
    name: 'Home',
    hash: '#home'
  },
  {
    name: 'About',
    hash: '#about'
  },
  {
    name: 'Projects',
    hash: '#projects'
  },
  {
    name: 'Skills',
    hash: '#skills'
  },
  {
    name: 'Experience',
    hash: '#experience'
  },
  {
    name: 'Contact',
    hash: '#contact'
  }
] as const;

export const experiencesData = [
  {
    title: 'Web / Mobile developer',
    location: 'Bayonne, France',
    description: 'I graduated after 8 months of studying (including 2 month stage). I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019 - 2024'
  },
  {
    title: 'Full-Stack Developer',
    location: 'Bayonne, France',
    description:
      "After 4 years as web / mobile developer, I'm now a full-stack developer working as a freelancer. My stack includes React, React Native, VueJS, Nuxt.js, Next.js, TypeScript, and PostgreSQL. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2024 - present'
  }
] as const;

export const projectsData = [
  {
    title: 'Mécamobile',
    description: 'A web site featuring a custom-built back office for an independent mechanic offering mobile services with a fully-equiped truck.',
    tags: ['VueJS', 'Vuetify', 'TinyMCE', 'NodeJS', 'Express', 'Sequelize'],
    imageUrl: mecamobileImg,
    github: 'https://github.com/fabienwnklr/garage',
    url: 'https://mecamobile.fr'
  },
  {
    title: 'Drawer',
    description: 'I worked to build a canvas free hand draw for an organization.',
    tags: ['Vite', 'Typescript', 'Vitest', 'CSS'],
    imageUrl: drawerImg,
    github: 'https://github.com/fabienwnklr/drawer',
    url: 'https://drawer.fabienwinkler.fr/'
  },
  {
    title: 'Free-drawing',
    description: 'Like `drawer`, I worked to build a canvas free hand draw for an organization, but more complexe and more complete for lot of uses.',
    tags: ['KonvaJS', 'Vite', 'Typescript', 'Vitest', 'CSS'],
    imageUrl: freeDrawingImg,
    github: 'https://github.com/fabienwnklr/free-drawing',
    url: 'https://free-drawing-docs.fabienwinkler.fr/'
  },
  {
    title: 'Géomatika (Isigéo)',
    description: 'A web / mobile app geographic information system for data analytics.',
    tags: ['Javascript (jQuery)', 'Bootstrap', 'PostgreSQL', 'Fullcalandar', 'Cordova'],
    imageUrl: geomatikaImg,
    github: '',
    url: 'https://geomatika.fr'
  },

  {
    title: 'Ethiclick',
    description: 'A mobile app listing all committed traders (ecologically) around you.',
    tags: ['React Native', 'TypeScript', 'React Native Paper', 'AdonisJS', 'Redux'],
    imageUrl: ethiclickImg,
    github: '',
    url: 'https://ethiclick.fr'
  },
  {
    title: 'Portfolio (this one)',
    description: 'My currently personnal portfolio.',
    tags: ['React', 'TypeScript', 'Next.js', 'Resend', 'Tailwind', ''],
    imageUrl: portfolioImg,
    github: 'https://github.com/fabienwnklr/portfolio',
    url: 'https://fabienwinkler.fr'
  }
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Next.js',
  'Nuxt.js',
  'Node.js',
  'Git',
  'Bootstrap',
  'Tailwind',
  'Figma',
  'Redux',
  'Express',
  'PostgreSQL',
  'AdonisJS'
] as const;

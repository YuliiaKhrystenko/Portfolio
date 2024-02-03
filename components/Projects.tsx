"use client"

import { projectsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ProjectProps = (typeof projectsData)[number]

function Project({
  title,
  description,
  tags,
  imageUrl,
  projectUrl
}: ProjectProps) {
  return (
    <div className='relative md:w-[28rem] md:h-[30rem] w-[20rem] h-[18rem] pb-8 md:pb-0 rounded-lg shadow-lg border-r border-l border-b border-[#ff0f80]/30 flex flex-col items-center justify-center md:justify-start'>
      <Link href={projectUrl} target='_blank'>
            <Image src={imageUrl} alt="Project I worked on" quality={95} className='w-full object-contain' />
      </Link>
      <div className='relative w-full space-y-5 cursor-default'>
        <h4 className='mt-4 text-2xl md:text-4xl font-semibold text-center tracking-wider uppercase'>
          <span className='block text-xl font-normal'>
          Case study:
          </span>
          {title}
          </h4>
          <ul className='hidden md:flex items-center justify-center flex-wrap mt-2 sm:gap-2 sm:mt-auto'>
        {
          tags.map((tag, index) => (
            <li className='sm:mb-2 border border-white/[0.1] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white/50 rounded-lg' key={index}>{tag}</li>
          ))
        }
          </ul>
      </div>


      {/* <p className='text-lg leading-relaxed text-gray-200 text-center'>{description}</p> */}
    </div>
  )
}


export default function Projects() {
  const { ref } = useSectionInView("Projects")

  return (
    <motion.div
    ref={ref}
    id="projects"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
    className='h-screen relative flex overflow-hidden flex-col md:flex-row justify-evenly items-center  mx-auto z-0'>
      <h3 className='absolute top-32 uppercase tracking-[20px] text-gray-500 text-2xl text-center'>Projects</h3>

      <div className='relative w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-10 z-20 mt-44 md:mt-20'>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      {/* <div className='w-full absolute top-[30%] bg-[#a252c8]/30 left-0 h-[300px] -skew-y-12' /> */}
    </motion.div>
  )
}

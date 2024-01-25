"use client"

import { projectsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

type ProjectProps = (typeof projectsData)[number]

function Project({
  title,
  description,
  tags,
  imageUrl
}: ProjectProps) {
  return (
    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-4 items-center justify-center p-20 md:p-44 h-screen'>
      <div 
      className='mt-16 px-0 md:px-10 max-w-6xl'>
        <h4 className='text-2xl md:text-4xl font-semibold text-center tracking-wider uppercase'>
          Case study: {title}</h4>
      </div>

      <Image src={imageUrl} alt="Project I worked on" quality={95} className='w-[24rem] rounded-lg shadow-2xl' />

      <p className='text-lg leading-relaxed text-gray-200 text-center'>{description}</p>
      <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
        {
          tags.map((tag, index) => (
            <li className='bg-white/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-black rounded-full' key={index}>{tag}</li>
          ))
        }
      </ul>
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
    className='h-screen flex flex-col relative overflow-hidden items-center text-left md:flex-row max-w-full justify-evenly mx-auto z-0'>
      <h3 className='absolute top-32 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#a252c8]/20 left-0 h-[300px] -skew-y-12' />
    </motion.div>
  )
}

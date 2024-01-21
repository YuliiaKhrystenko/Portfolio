"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div 
    className='h-screen flex flex-col relative items-center text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
    >
      <h3 className='absolute top-32 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <div className='space-y-10 mt-32 sm:mt-20 px-2 md:px-10'>
        <p className='text-base leading-6 sm:leading-8 tracking-wider'>I'm a self-taught programmer from Ukraine. I'm currently getting a degree in economics and decided to pursue my passion for programming. I learned frontend development offered by Meta and earn a credential from Meta. My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. My core stack is Vue, Nuxt.js, React, Next.js, Node.js. I am also familiar with TypeScript and Python. I am always looking to learn new technologies. 
          <p>I am currently looking for a full-time position as a frontend developer.</p>
        </p>
        </div>
    </motion.div>
  )
}

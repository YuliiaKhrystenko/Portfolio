"use client"

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

export default function About() {
  const { ref } = useSectionInView("About")
  
  return (
    <motion.div 
    ref={ref}
    className='h-screen flex flex-col relative items-center text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
    id="about"
    >
      <h3 className='absolute top-32 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <div className='space-y-10 mt-32 sm:mt-20 px-2 md:px-10'>
        <p className='text-base leading-6 sm:leading-8 tracking-wider'>I'm a self-taught programmer from Ukraine. I'm currently getting a degree in economics and decided to pursue my passion for programming. I learned frontend development offered by Meta and earn a credential from Meta. My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. My core stack is Vue, Nuxt.js, React, Next.js, Node.js. I am also familiar with TypeScript and Python. I am always looking to learn new technologies. 
          <span className='block'> I am currently looking for a full-time position as a frontend developer.</span>
        </p>
        </div>
    </motion.div>
  )
}

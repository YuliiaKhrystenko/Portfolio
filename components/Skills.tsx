"use client"

import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'


const fadeInAnimation = {
  initial: {
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    transition: {
      delay: 0.05 * index
    }
  }),
}

export default function Skills() {
  const { ref } = useSectionInView("Skills")

  return (
    <motion.div ref={ref} id="skills" className='h-screen flex flex-col relative items-center text-center xl:flex-row max-w-7xl xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto'>
      <h3 className='absolute top-32 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

      {/* <h3 className='absolute top-44 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for currency profieciency</h3> */}

      <ul className='mt-20 sm:mt-0 max-w-[54rem] flex flex-wrap justify-center gap-2 text-sm text-gray-800 sm:text-lg px-6 sm:px-0'>
        {
          skillsData.map((skill, index) => (
            <motion.li 
            className='bg-white border border-black/[0.1] rounded-xl py-2 px-2 cursor-pointer sm:px-5 sm:py-3 filter hover:bg-purple-200 transition duration-300 ease-in-out' 
            key={index}
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            >
              {skill}
            </motion.li>
          ))
        }
      </ul>
    </motion.div>
  )
}

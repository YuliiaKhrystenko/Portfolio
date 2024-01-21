"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function Skills() {
  return (
    <motion.div className='h-screen flex flex-col relative items-center text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto'>
      <h3 className='absolute top-32 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

      <h3 className='absolute top-44 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for currency profieciency</h3>

      <div className='grid grid-cols-4 gap-5'></div>
    </motion.div>
  )
}

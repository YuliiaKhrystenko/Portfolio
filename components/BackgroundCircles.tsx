"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0], 
        scale: [1, 2, 2, 2, 1],
        borderRadius: ["20%", "20%", "20%", "10%", "10%"],
      }}
      transition={{ duration: 2.5 }}
      className='relative flex justify-center items-center'>
      <div className='mt-80 absolute border border-[#333333] rounded-full h-[200px] w-[200px] animate-ping' />
      <div className='mt-80 absolute border border-[#333333] rounded-full h-[300px] w-[300px] animate-ping' />
      <div className='mt-80 absolute border border-[#333333] rounded-full h-[500px] w-[500px] animate-ping' />
      <div className='mt-80 absolute rounded-full border border-[#ff0f80] opacity-20 h-[500px] w-[500px] animate-pulse' />
      <div className='mt-80 absolute rounded-full border border-[#333333] h-[640px] w-[640px]' />
    </motion.div>
  )
}

"use client"

import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import avatar from '../public/emoji.png'


export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hey, I'm Yuliia",
      "Girl-who-loves-Cats.tsx",
      "<ButLovesToCodeMore />"
    ],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />

      <Image 
      className='relative rounded-lg h-32 w-32 mx-auto object-cover'
      src={avatar}
      alt='emoji'
      />

      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-4 tracking-[15px]'>Frontend Developer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#a252c8' />
        </h1>
      </div>
    </div>
  )
}

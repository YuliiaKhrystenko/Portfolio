"use client"

import Image from 'next/image';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import avatar from '../public/emoji.png';
import BackgroundCircles from './BackgroundCircles';
import { useSectionInView } from '@/lib/hooks';


export default function Hero() {
  const { ref } = useSectionInView("Home")

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
    <div ref={ref} id="home" className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />

      <Image 
      className='relative rounded-lg h-32 w-32 mx-auto object-cover'
      src={avatar}
      alt='emoji'
      />

      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-4 tracking-[15px]'>Frontend Developer</h2>
        <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#ff0f80' />
        </h1>
      </div>
    </div>
  )
}

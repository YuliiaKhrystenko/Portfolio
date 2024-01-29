import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 flex flex-col items-center justify-center text-center text-gray-500'>
      <small className='mb-2 text-xs block'>
        © 2024 Yuliia. All rights reserved.
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>About this website</span> built with React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Vercel hosting.
      </p>
    </footer>
  )
}

"use client"

import React from 'react'

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function ContactMe() {
  const { ref } = useSectionInView("Contact")

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      id="contact"
      className='h-screen flex flex-col relative text-center items-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto'>
      <h3 className='absolute top-32 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

      <div className='flex flex-col space-y-2'>
        <h4 className='text-2xl sm:text-4xl font-semibold text-center mt-4 sm:mt-16'>I have got just what you need.</h4>

        <p className='text-gray-500 pb-4 sm:pb-8'>Please contact me directly at <a className='underline' href='mailto:yu6785963@gmail.com'>yu6785963@gmail.com</a> or through this form.</p>

        <form
          className='flex flex-col space-y-2 w-fit mx-auto' action={async (formData) => {
            const { data, error } = await sendEmail(formData)

            if (error) {
              toast.error(error)
              return
            }

            toast.success('Email sent successfully!')
          }}
        >

          <input
            className='outline-none px-6 py-4 rounded-lg bg-slate-400/10 border-b border-[#242424] text-gray-200 placeholder-gray-500 transition-all focus:border-[#a252c8]/40 hover:border-[#a252c8]/40  focus:text-white'
            type="text"
            placeholder='Your name'
            required
            maxLength={500}
            name='senderName'
          />

          <input className='outline-none px-6 py-4 rounded-lg bg-slate-400/10 border-b border-[#242424] text-gray-200 placeholder-gray-500 transition-all focus:border-[#a252c8]/40 hover:border-[#a252c8]/40 focus:text-white'
            type="email"
            placeholder='Your email'
            required
            maxLength={500}
            name='senderEmail'
          />

          <textarea className='outline-none px-6 py-4 rounded-lg bg-slate-400/10 border-b border-[#242424] text-gray-200 placeholder-gray-500 transition-all focus:border-[#a252c8]/40 hover:border-[#a252c8]/40  focus:text-white'
            placeholder='Your message'
            required
            maxLength={5000}
            name='message'
          />

          <SubmitBtn />
        </form>
      </div>
    </motion.div>
  )
}

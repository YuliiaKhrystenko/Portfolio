import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { useFormStatus } from 'react-dom';

export default function SubmitBtn() {
  const { pending } = useFormStatus()

  return (
    <button 
    className='group flex items-center justify-center gap-2 bg-[#a252c8] py-5 px-10 rounded-md text-black font-bold transition disabled:scale-100 disabled:bg-opacity-65' 
    type='submit'
    disabled={pending}
    >
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          Submit
          < FaPaperPlane className='text-sm opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
        </>
      )}
    </button>
  )
}

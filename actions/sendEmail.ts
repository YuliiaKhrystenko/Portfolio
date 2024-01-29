"use server"

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactForm from "@/email/contact-form";

const resend = new Resend(process.env.RESEND_API_KEY)


export const sendEmail = async (formData: FormData) => {
  
  const senderName = formData.get('senderName')
  const senderEmail = formData.get('senderEmail')
  const message = formData.get('message')


  // server side validataion
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email"
    }
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message"
    }
  }

  let data
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'yu6785963@gmail.com',
      subject: `Message from Contact form`,
      reply_to: senderEmail as string,
      react: React.createElement(ContactForm, {
        message: message as string,
        senderEmail: senderEmail as string,
        senderName: senderName as string
      })
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }

  return {
    data
  }
}
import React from 'react'
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormProps = {
  message: string;
  senderEmail: string;
  senderName: string
}

export default function ContactForm({
  message,
  senderEmail,
  senderName
}: ContactFormProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from portfolio site</Preview>
      <Tailwind>
        <Body className='bg-gray-100 text-black'>
          <Container>
            <Section className='bg-white my-10 px-10 py-4 rounded-md'>
              <Heading className='leading-tight'>You received the following message from the contact form</Heading>
              <Text>{ message }</Text>
              <Hr />
              <Text>The sender's Name is: {senderName}</Text>
              <Text>The sender's Email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

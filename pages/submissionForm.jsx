import React from 'react'
import ContactForm from '../components/ContactForm'

const submissionForm = () => {
  return (
    <div className='p-4 max-w-3xl mx-auto'>
        <h1>Contact Us</h1>
        <p>Please fill the form below</p>
    <ContactForm/>
    </div>
  )
}

export default submissionForm
import React from 'react'
import AddressInfo from './AddressInfo'
import Form from './Form'

export default function Contact() {
  return (
    <div className="w-full bg-zinc-300">
      <div className="container py-16 flex flex-col lg:flex-row">
        <AddressInfo />
        <Form />
      </div>
    </div>
  )
}

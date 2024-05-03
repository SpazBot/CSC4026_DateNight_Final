//Import components from both the react and tailwind libraries as well as the custom Input file
import { Input } from './components/Input.jsx'
import { FormProvider, useForm } from 'react-hook-form'
import {
  name_validation,
  desc_validation,
  email_validation,
  num_validation,
  password_validation,
} from './utils/inputValidations'
import { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'

export const Form = () => {
  const methods = useForm()

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        className="container"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Input
            label="What's your favorite movie?"
            type="text"
            id="question1"
            placeholder="type your response..."
          />
          <Input
            label="Where would you like to travel most?"
            type="text"
            id="question2"
            placeholder="type your response..."
          />
          <Input
            label="What is your dream job?"
            type="text"
            id="question3"
            placeholder="type your response..."
          />
          <Input
            label="What is your favorite food?"
            type="text"
            id="question4"
            placeholder="type your response..."
          />
          <Input
            label="If you could have any superpower, what would it be?"
            type="text"
            id="question5"
            placeholder="type your response..."
          />
          <Input
            label="What do you value most in a partner?"
            type="text"
            id="question6"
            placeholder="type your response..."
          />
          <Input
            label="What music genres do you like?"
            type="text"
            id="question7"
            placeholder="type your response..."
          />
          <Input
            label="Enter your partners email address"
            type="email"
            id="emailQuestion"
            placeholder="email@email.com"
          />
        </div>
        <div className="mt-5">
          <button
            onClick={onSubmit}
            className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
          >
            <GrMail />
            Submit Form
          </button>
        </div>
      </form>
    </FormProvider>
  )
}

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
  return (
    <div className="text-center mt-5">Welcome to Date Night Questions!</div>
  )
}
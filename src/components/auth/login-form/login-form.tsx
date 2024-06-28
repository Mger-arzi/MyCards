import { useForm } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/text-field'

import { Button } from '../../ui/button'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { handleSubmit, register } = useForm<FormValues>()

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  console.log(register)

  return (
    <form onSubmit={onSubmit}>
      <TextField {...register('email')} label={'Email'} />
      <TextField {...register('password')} label={'Password'} />
      <Checkbox {...register('rememberMe')} label={'Remember me'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}

import { useForm } from 'react-hook-form'

import { FormCheckbox } from '@/components/ui/form/form-checkbox'
import { TextField } from '@/components/ui/text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../ui/button'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(30),
  rememberMe: z.boolean().optional(),
})

export type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })
  // const {
  //   field: { onChange, value },
  // } = useController({ control, name: 'rememberMe' })

  return (
    <form onSubmit={onSubmit}>
      <TextField
        {...register('email')}
        errorMessage={errors?.email?.message}
        label={'Email'}
        placeholder={'email'}
      />
      <TextField
        {...register('password')}
        errorMessage={errors?.password?.message}
        label={'Password'}
        minLength={3}
        placeholder={'password '}
        type={'password'}
      />
      <FormCheckbox control={control} label={'RememberMe'} name={'rememberMe'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}

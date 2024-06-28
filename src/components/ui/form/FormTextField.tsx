import { FieldValues, UseControllerProps, useController, useForm } from 'react-hook-form'

import { FormValues, loginSchema } from '@/components/auth/login-form/login-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { TextField, TextFieldProps } from '../text-field'

type Props<T extends FieldValues> = Omit<TextFieldProps, ' placeholder' | 'errorMessage'> &
  UseControllerProps<T>

export const FormTextField = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...restProps
}: Props<T>) => {
  const {
    fieldState: { error },
  } = useController({ control, defaultValue, disabled, name, rules, shouldUnregister })

  console.log(error)

  return (
    <TextField
      {...restProps}
      errorMessage={error?.message}
      placeholder={'password '}
      type={'password'}
    />
  )
}

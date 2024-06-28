import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '../text-field'

type Props<T extends FieldValues> = Omit<
  TextFieldProps,
  ' disabled' | 'checked' | 'errorMessage' | 'name' | 'onBlur' | 'onCheckedChange' | 'ref'
> &
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
    field: { onChange, value, ...field },
    fieldState: { error },
  } = useController({ control, defaultValue, disabled, name, rules, shouldUnregister })

  return (
    <TextField
      {...restProps}
      checked={value}
      errorMessage={error?.message}
      label={'Password'}
      placeholder={'password '}
      type={'password'}
      {...field}
    />
  )
}

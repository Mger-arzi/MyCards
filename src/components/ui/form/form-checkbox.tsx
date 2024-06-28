import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '../checkbox'

type Props<T extends FieldValues> = Omit<
  CheckboxProps,
  ' disabled' | 'checked' | 'name' | 'onBlur' | 'onCheckedChange' | 'ref'
> &
  UseControllerProps<T>
export const FormCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...checkboxProps
}: Props<T>) => {
  const {
    field: { onChange, value, ...field },
  } = useController({ control, defaultValue, disabled, name, rules, shouldUnregister })

  return (
    <Checkbox
      {...checkboxProps}
      checked={value}
      label={'Remember me'}
      onCheckedChange={onChange}
      {...field}
    />
  )
}

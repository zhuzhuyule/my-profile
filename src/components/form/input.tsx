import { Input, InputProps, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { IBasicProps } from './basic';

interface IFormInputProps extends Omit<InputProps, 'name' | 'value' | 'onChange' | 'error'>, IBasicProps {}

function FormInput(props: IFormInputProps) {
  const method = useFormContext();
  return (
    <Controller
      name={props.name}
      rules={props.rules}
      defaultValue={props.defaultValue}
      control={method.control}
      render={({ field }) => {
        return !props.readonly ? <Typography>{field.value}</Typography> : <Input {...props} {...field} />;
      }}
    />
  );
}

export default FormInput;

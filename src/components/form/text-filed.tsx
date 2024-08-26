import { TextField, TextFieldProps, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { EMPTY_STRING } from '../../constants';
import { IBasicProps } from './basic';

interface IFormTextFieldProps extends Omit<TextFieldProps, 'name' | 'value' | 'onChange' | 'error'>, IBasicProps {}

function FormTextField(props: IFormTextFieldProps) {
  const method = useFormContext();
  return (
    <Controller
      name={props.name}
      rules={props.rules}
      defaultValue={props.defaultValue}
      control={method.control}
      render={({ field }) => {
        return !props.readonly ? (
          <Typography>{field.value || EMPTY_STRING}</Typography>
        ) : (
          <TextField {...props} {...field} />
        );
      }}
    />
  );
}

export default FormTextField;

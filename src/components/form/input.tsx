import { Input, InputProps, Typography, TypographyProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { EMPTY_STRING } from '../../constants';
import { IBasicProps } from './basic';

interface IFormInputProps extends Omit<InputProps, 'name' | 'value' | 'onChange' | 'error'>, IBasicProps {
  typography?: TypographyProps;
}

function FormInput({ typography: typographyProps, ...props }: IFormInputProps) {
  const method = useFormContext();
  return (
    <Controller
      name={props.name}
      rules={props.rules}
      defaultValue={props.defaultValue}
      control={method.control}
      render={({ field }) => {
        return !props.readonly ? (
          <Typography {...typographyProps}>{field.value || EMPTY_STRING}</Typography>
        ) : (
          <Input {...props} {...field} />
        );
      }}
    />
  );
}

FormInput.defaultProps = {
  typography: {},
};

export default FormInput;

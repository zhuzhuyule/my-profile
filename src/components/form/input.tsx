import { Input, InputProps, Typography, TypographyProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { EMPTY_STRING } from '../../constants';
import { useFormStatus } from '../../providers/form-status-provider';
import { IBasicProps } from './basic';
import FadeTransition from '../fade-transition';

interface IFormInputProps extends Omit<InputProps, 'name' | 'value' | 'onChange' | 'error'>, IBasicProps {
  typography?: TypographyProps;
}

function FormInput({ typography: typographyProps, ...props }: IFormInputProps) {
  const method = useFormContext();
  const { readonly } = useFormStatus();

  return (
    <Controller
      name={props.name}
      rules={props.rules}
      defaultValue={props.defaultValue}
      control={method.control}
      render={({ field }) => {
        return (
          <FadeTransition
            readonly={props.readonly || readonly}
            readonlyComponent={<Typography {...typographyProps}>{field.value || EMPTY_STRING}</Typography>}>
            <Input fullWidth {...props} {...field} />
          </FadeTransition>
        );
      }}
    />
  );
}

FormInput.defaultProps = {
  typography: {},
};

export default FormInput;

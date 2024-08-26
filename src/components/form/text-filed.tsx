import { TextField, TextFieldProps, Typography, TypographyProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { EMPTY_STRING } from '../../constants';
import { useFormStatus } from '../../providers/form-status-provider';
import { IBasicProps } from './basic';
import FadeTransition from '../fade-transition';

interface IFormTextFieldProps extends Omit<TextFieldProps, 'name' | 'value' | 'onChange' | 'error'>, IBasicProps {
  typography?: TypographyProps;
}

function FormTextField({ typography, ...props }: IFormTextFieldProps) {
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
            readonlyComponent={<Typography {...typography}>{field.value || EMPTY_STRING}</Typography>}>
            <TextField fullWidth multiline minRows={1} maxRows={10} {...props} {...field} />
          </FadeTransition>
        );
      }}
    />
  );
}

FormTextField.defaultProps = {
  typography: {},
};

export default FormTextField;

import { TextField, TextFieldProps, Typography, TypographyProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { EMPTY_STRING } from '../../constants';
import { useFormStatus } from '../../providers/form-status-provider';
import FadeTransition from '../fade-transition';
import { IBasicProps } from './basic';

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
            readonlyComponent={
              <Typography {...typography} p="4px 0 5px" lineHeight="23px">
                {field.value || EMPTY_STRING}
              </Typography>
            }>
            <TextField
              fullWidth
              multiline
              minRows={1}
              maxRows={10}
              variant="standard"
              {...props}
              {...field}
              sx={{ borderColor: 'transparent' }}
            />
          </FadeTransition>
        );
      }}
    />
  );
}

export default FormTextField;

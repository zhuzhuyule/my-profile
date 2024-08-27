import { TextField, TextFieldProps, Typography, TypographyProps } from '@mui/material';
import get from 'lodash/get';
import { Controller, useFormContext } from 'react-hook-form';
import { EMPTY_STRING } from '../../constants';
import { useFormStatus } from '../../providers/form-status-provider';
import FadeTransition from '../fade-transition';
import { IBasicProps } from './type';

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
      render={({ field, formState }) => {
        const errorMessage = get(formState.errors, `${props.name}.message`, '') as string;
        return (
          <FadeTransition
            readonly={props.readonly || readonly}
            readonlyComponent={
              <Typography {...typography} p="4px 0 5px" lineHeight="23px" whiteSpace="pre-wrap">
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
              error={!!errorMessage}
              helperText={errorMessage}
            />
          </FadeTransition>
        );
      }}
    />
  );
}

export default FormTextField;

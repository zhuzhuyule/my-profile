import { Input, InputProps, Typography, TypographyProps } from '@mui/material';
import get from 'lodash/get';
import { Controller, useFormContext } from 'react-hook-form';
import { EMPTY_STRING } from '../../constants';
import { useFormStatus } from '../../providers/form-status-provider';
import FadeTransition from '../fade-transition';
import { IBasicProps } from './type';

interface IFormInputProps extends Omit<InputProps, 'name' | 'value' | 'onChange' | 'error'>, IBasicProps {
  typography?: TypographyProps;
  emptyValue?: string;
}

function FormInput({ typography = {}, emptyValue = EMPTY_STRING, ...props }: IFormInputProps) {
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
              <Typography
                component="div"
                lineHeight="23px"
                {...typography}
                sx={{ p: '4px 0 5px', ...(props.sx as any), ...typography.sx }}
                noWrap>
                {field.value || emptyValue}
              </Typography>
            }>
            <>
              <Input fullWidth {...props} {...field} error={!!errorMessage} />
              {errorMessage && (
                <Typography
                  id={`${field.name}-error`}
                  sx={{ color: (theme) => theme.palette.error.main, fontSize: '12px', marginTop: '4px' }}>
                  {errorMessage}
                </Typography>
              )}
            </>
          </FadeTransition>
        );
      }}
    />
  );
}

export default FormInput;

import { Input, InputProps, Typography, TypographyProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { EMPTY_STRING } from '../../constants';
import { useFormStatus } from '../../providers/form-status-provider';
import FadeTransition from '../fade-transition';
import { IBasicProps } from './type';

interface IFormInputProps extends Omit<InputProps, 'name' | 'value' | 'onChange' | 'error'>, IBasicProps {
  typography?: TypographyProps;
}

function FormInput({ typography = {}, ...props }: IFormInputProps) {
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
              <Typography
                component="div"
                lineHeight="23px"
                {...typography}
                sx={{ p: '4px 0 5px', ...(props.sx as any), ...typography.sx }}
                noWrap>
                {field.value || EMPTY_STRING}
              </Typography>
            }>
            <Input key={field.name} fullWidth {...props} {...field} value={field.value || EMPTY_STRING} />
          </FadeTransition>
        );
      }}
    />
  );
}

export default FormInput;

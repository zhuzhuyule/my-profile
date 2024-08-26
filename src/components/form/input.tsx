import { Input, InputProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { EMPTY_STRING } from '../../constants';
import { useFormStatus } from '../../providers/form-status-provider';
import FadeTransition from '../fade-transition';
import { IBasicProps } from './basic';
import './input.css';

interface IFormInputProps extends Omit<InputProps, 'name' | 'value' | 'onChange' | 'error'>, IBasicProps {}

function FormInput(props: IFormInputProps) {
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
          <FadeTransition readonly={props.readonly || readonly}>
            {(isReadonly) => (
              <Input
                key={field.name}
                fullWidth
                autoComplete="off"
                {...props}
                {...field}
                value={field.value || EMPTY_STRING}
                className={`${props.className || ''} ${isReadonly ? 'from-input-readonly' : ''}`}
                readOnly={isReadonly}
              />
            )}
          </FadeTransition>
        );
      }}
    />
  );
}

export default FormInput;

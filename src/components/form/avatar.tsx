import { Avatar, AvatarProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { IBasicProps } from './basic';

interface IFormAvatarProps extends Omit<AvatarProps, 'name' | 'value' | 'onChange' | 'error'>, IBasicProps {}

function FormAvatar(props: IFormAvatarProps) {
  const method = useFormContext();
  return (
    <Controller
      name={props.name}
      rules={props.rules}
      defaultValue={props.defaultValue}
      control={method.control}
      render={({ field }) => {
        return (
          <Avatar
            {...props}
            alt="User Avatar"
            src={field.value} // 替换为实际头像地址
            sx={{ width: 120, height: 120, mb: 2 }}
          />
        );
      }}
    />
  );
}

export default FormAvatar;

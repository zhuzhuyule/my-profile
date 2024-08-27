import { Avatar, AvatarProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { IBasicProps } from './type';

interface IFormAvatarProps extends Omit<AvatarProps, 'name' | 'value' | 'onChange' | 'error'>, IBasicProps {}

function isChineseChar(str: string) {
  return str && /[\u4E00-\u9FAF]/.test(str[0]!);
}

function stringAvatar(name: string = '') {
  if (isChineseChar(name.trim())) {
    return name[0];
  }
  const nameArr = name.trim().split(/ +/);
  return `${nameArr[0]?.[0] || ''}${nameArr[1]?.[0] || ''}`.toUpperCase();
}

function FormAvatar(props: IFormAvatarProps) {
  const method = useFormContext();
  return (
    <Controller
      name={props.name}
      defaultValue={props.defaultValue}
      control={method.control}
      render={({ field }) => {
        const name = stringAvatar(field.value);
        return (
          <Avatar
            {...props}
            alt={field.value}
            sx={{
              margin: '60px auto',
              pt: name ? '4px' : '',
              boxSizing: 'border-box',
              color: 'white',
              border: '2px solid white',
              boxShadow: '0px 0px 7px 3px rgba(0, 0, 0, 0.2)',
              overflow: 'hidden',
              transform: 'scale(3)',
              background:
                'linear-gradient(to right, #3f51b5, #009688, #42a5f5, #9ccc65); linear-gradient(to top, #3f51b5, #009688, #42a5f5, #9ccc65)',
              backgroundSize: '300% 300%',
              animation: 'gradientAnimation 15s ease infinite',
              transition: 'transform 0.5s ease',
              '&:hover': {
                transform: 'scale(3) rotate(360deg)',
              },
            }}>
            {name}
          </Avatar>
        );
      }}
    />
  );
}

export default FormAvatar;

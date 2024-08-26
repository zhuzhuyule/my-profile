import React, { useState, useEffect } from 'react';
import { Box, BoxProps } from '@mui/material';

interface IFadeTransitionProps extends Omit<BoxProps, 'children'> {
  children: React.ReactNode | ((isReadonly: boolean) => React.ReactNode);
  readonly: boolean;
  readonlyComponent?: React.ReactNode;
  duration?: number;
}

function FadeTransition({ children, readonly, duration = 300, readonlyComponent, ...props }: IFadeTransitionProps) {
  const [isReadonly, setIsReadonly] = useState(readonly);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (readonly !== isReadonly) {
      setOpacity(0);
      timer = setTimeout(() => {
        setIsReadonly(readonly);
        setOpacity(1);
      }, duration);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isReadonly, readonly, duration]);

  const shouldRenderReadonly = isReadonly && readonlyComponent !== undefined;
  const child = typeof children === 'function' ? children(isReadonly) : children;
  return (
    <Box
      {...props}
      sx={{
        width: '100%',
        ...props.sx,
        transition: `opacity ${duration}ms ease-in-out`,
        opacity,
      }}>
      {/* {readonlyComponent} */}
      {shouldRenderReadonly ? readonlyComponent : child}
    </Box>
  );
}

export default FadeTransition;

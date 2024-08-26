import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

interface IFadeTransitionProps {
  children: React.ReactNode;
  readonly: boolean;
  readonlyComponent: React.ReactNode;
  duration?: number;
}

function FadeTransition({ children, readonly, duration, readonlyComponent }: IFadeTransitionProps) {
  const [isReadonly, setIsReadonly] = useState(readonly);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (readonly !== isReadonly) {
      setOpacity(0);
      setTimeout(() => {
        setIsReadonly(readonly);
        setOpacity(1);
      }, duration);
    }
  }, [isReadonly, readonly, duration]);

  return (
    <Box
      sx={{
        transition: `opacity ${duration}ms ease-in-out`,
        opacity,
      }}>
      {isReadonly ? readonlyComponent : children}
    </Box>
  );
}

FadeTransition.defaultProps = {
  duration: 300,
};

export default FadeTransition;

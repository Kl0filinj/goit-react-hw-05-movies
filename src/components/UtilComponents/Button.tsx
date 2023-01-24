import React from 'react';
import { Button } from '@chakra-ui/react';

interface ButtonSampleProps {
  children: React.ReactNode;
  margin?: number | string;
  variant?: string;
  props?: React.HTMLProps<HTMLButtonElement>;
}

const ButtonSample: React.FC<ButtonSampleProps> = ({
  children,
  margin = 0,
  variant = 'outline',
  ...props
}) => {
  return (
    <Button
      {...props}
      colorScheme="orange"
      variant={variant}
      ml={margin}
      sx={{
        '&:hover ': {
          color: 'black',
          backgroundColor: 'orange.600',
        },
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonSample;

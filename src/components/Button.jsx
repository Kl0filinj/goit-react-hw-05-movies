import React from 'react';
import { Button } from '@chakra-ui/react';

const ButtonSample = ({
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

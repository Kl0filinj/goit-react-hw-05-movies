import React from 'react';
import { Box } from '@chakra-ui/react';

interface ContainerProps {
  children: React.ReactNode
}

const Container:React.FC<ContainerProps> = ({ children }) => {
  return (
    <Box position="relative" flexShrink="0" overflow="hidden" p="12">
      {children}
    </Box>
  );
};

export default Container;

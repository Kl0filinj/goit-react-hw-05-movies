import React from 'react';
import { Box } from '@chakra-ui/react';

const Container = ({ children }) => {
  return (
    <Box position="relative" flexShrink="0" overflow="hidden" p="12">
      {children}
    </Box>
  );
};

export default Container;

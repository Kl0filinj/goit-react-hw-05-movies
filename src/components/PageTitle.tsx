import React from 'react';
import { Heading } from '@chakra-ui/react';

interface PageTitleProps {
  children: React.ReactNode;
}

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return (
    <Heading
      textAlign="center"
      py="8"
      fontFamily="heading"
      fontWeight="medium"
      fontSize="5xl"
      color="white"
    >
      {children}
    </Heading>
  );
};

export default PageTitle;

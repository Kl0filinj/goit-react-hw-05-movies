import React from 'react';
// import { Title } from './PageTitle.styled';
import { Heading } from '@chakra-ui/react';

const PageTitle = ({ children }) => {
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

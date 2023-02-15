import React from 'react';
import {
  Flex,
} from '@chakra-ui/react'
import Header from './components/Header';
import Projects from './components/Projects';
import Employment from './components/Employment';

const App = () => {
  return (
    <Flex direction='column' justifyContent='flex-start' m={20} gap={5}>
      <Header />
      <Projects />
      <Employment />
    </Flex>
  );
}

export default App;

import React from 'react';
import {
  Container
} from 'react-bootstrap';

import Header from './components/header';
import Search from './components/products/search';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Search className="mb-3" />
        </Container>
      </main>
    </>
  );
}

export default App;

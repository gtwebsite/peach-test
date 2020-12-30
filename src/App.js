import React from 'react';
import {
  Row,
  Col,
  Container
} from 'react-bootstrap';

import Header from './components/header';
import Search from './components/products/search';
import ProductCard from './components/products/card';
import data from './data';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Search className="mb-3" />
          <Row>
            <Col md={4}>
              {data?.map((widget,i)=><ProductCard {...widget} key={`card${i}`} />)}
            </Col>
            <Col md={8}>
              asd
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default App;

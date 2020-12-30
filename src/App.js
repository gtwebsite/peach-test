import React, { useEffect, useContext } from 'react';
import {
  Row,
  Col,
  Container
} from 'react-bootstrap';

import Header from './components/header';
import Search from './components/products/search';
import ProductCard from './components/products/card';
import data from './data';
import { Context } from "./store";

const App = () => {
  const { state, setProducts } = useContext(Context);

  useEffect(()=>{
    setProducts({activeProduct: data[0], ...state.product });
  }, []);

  useEffect(()=>{
    console.log(state);
  })

  return (
    <>
      <Header />
      <main>
        <Container>
          <Search className="mb-3" />
          <Row>
            <Col md={4}>
              {data?.map((d,i)=><ProductCard 
                  data={d} 
                  key={`card${i}`} 
                  className={`product-card${d.id === state.products?.activeProduct?.id ? ' active' : ''}`} 
                  onClick={()=>{
                    setProducts({activeProduct: d, ...state.product });
                  }} 
                />
              )}
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

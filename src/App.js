import React, { useEffect, useContext } from 'react';
import {
  Row,
  Col,
  Container
} from 'react-bootstrap';

import Header from './components/header';
import Search from './components/products/search';
import ProductCard from './components/products/card';
import ProductDetail from './components/products/detail';
import data from './data';
import { Context } from "./store";

const App = () => {
  const { state, setProducts } = useContext(Context);

  useEffect(()=>{
    setProducts({...state.products, activeProduct: data[0] });
  }, []);

  useEffect(()=>{
    console.log(state.products);
  });

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
                    setProducts({...state.products, activeProduct: d });
                  }} 
                />
              )}
            </Col>
            <Col md={8}>
              <ProductDetail className={`product-detail`} data={state.products?.activeProduct} />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default App;

import React, { useContext } from 'react';
import {
  Card,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import { 
  FaCartPlus
} from 'react-icons/fa';
import ReactHtmlParser from 'react-html-parser'
import update from 'immutability-helper';

import { Context } from "../../store";

const ProductDetail = ({data, ...props}) => {
  const { state, setProducts } = useContext(Context);
  
  if( !data ) {
    return <p>Loading product detail...</p>;
  }

  const addToCart = () => {
    let cartItem = {};
    let cart = state.products.cart;
    let newCart = [];
    let getIndex = cart.findIndex(x => x.id === data.id);

    if( getIndex > -1 ) {
      newCart = update(cart, {[getIndex]: { unit: { $apply: function(x) {return x + 1;} } }});
    }else{
      cartItem = {
        id: data.id,
        name: data.name,
        price: data.price,
        unit: 1,
      }
      newCart = [...state.products.cart, cartItem];
    }

    setProducts({...state.products, 
      cart: newCart
    }); 
  }

  return (
    <Card as="article" {...props}>
      <Card.Body>
        <Row as="header" className="align-items-center">
          <Col sm={8}>
            <h1>{data.name}</h1>
          </Col>
          <Col sm={4} className="text-sm-right">
            <Button onClick={addToCart}>
              <FaCartPlus size={32} />
            </Button>
          </Col>
        </Row>

        <figure>   
          <img src={data.image} alt={`${data.name} featured`} className="img-fluid" />
        </figure>

        <div className="specs">
          <h2>Specifications</h2>
          <Row>
            <Col sm={4}>
              <dl>
                <dt>Dimensions</dt>
                <dd>{data.dimension?.width} x {data.dimension?.height} x {data.dimension?.length}</dd>
              </dl>
            </Col>
            <Col xs={6} sm={4}>
              <dl>
                <dt>Weight</dt>
                <dd>{data.weight}lbs</dd>
              </dl>
            </Col>
            <Col xs={6} sm={4}>
              <dl>
                <dt>Capacity</dt>
                <dd>{data.capacitor}</dd>
              </dl>
            </Col>
          </Row>
        </div>

        <div className="desc">{ReactHtmlParser(data.description)}</div>
      </Card.Body>
    </Card>
  );
}

export default ProductDetail;
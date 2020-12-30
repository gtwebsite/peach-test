import React from 'react';
import {
  Card
} from 'react-bootstrap';

const ProductCard = ({data, ...props}) => {
  return (
    <Card {...props}>
      <Card.Body>
        <h4>{data.name}</h4>
        <dl>
          <dt>Price</dt>
          <dd>${data.price}</dd>
        </dl>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
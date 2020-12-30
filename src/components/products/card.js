import React from 'react';
import classnames from 'classnames';
import {
  Card
} from 'react-bootstrap';

const ProductCard = (props) => {
  return (
    <Card className={ classnames(`product-card`, props.className) }>
      <Card.Body>
        <h4>{props.name}</h4>
        <dl>
          <dt>Price</dt>
          <dd>${props.price}</dd>
        </dl>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
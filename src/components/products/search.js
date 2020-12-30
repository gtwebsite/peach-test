import React from 'react';
import classnames from 'classnames';
import {
  Form,
  Button
} from 'react-bootstrap';
import { 
  FaSearch
} from 'react-icons/fa';

const Search = (props) => {
  return (
    <Form className={ classnames(`product-search`, props.className)}>
      <Form.Label className="sr-only" htmlFor="product-search">Find widget</Form.Label>
      <Form.Control type="search" placeholder="Find the widget of your dreams" id="product-search" />
      <Button type="submit">
        <FaSearch size={22} />
      </Button>
    </Form>
  );
}

export default Search;
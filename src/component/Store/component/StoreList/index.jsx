import React from "react";
import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/layout";
import Product from "../Product";

ProductList.propTypes = {
  productlist: PropTypes.array.isRequired,
};

function ProductList({ productlist }) {
  return (
    <Flex wrap="wrap" justify="center">
      {productlist.map((product) => (
        <Product product={product} />
      ))}
    </Flex>
  );
}

export default ProductList;

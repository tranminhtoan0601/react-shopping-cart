import React from "react";
import PropTypes from "prop-types";
import { Heading } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";

Cart.propTypes = {};

function Cart(props) {
  return (
    <Box textAlign="center" paddingTop="40px">
      <Heading> CART</Heading>
      <Heading fontSize="14px" paddingTop="20px" color="gray">
        This is the Cart Page
      </Heading>
    </Box>
  );
}

export default Cart;

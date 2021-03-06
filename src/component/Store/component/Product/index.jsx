import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../../../Header/counterSlice";
import "./Product.scss";
Product.propTypes = {
  product: PropTypes.object.isRequired,
};

function Product({ product }) {
  const dispatch = useDispatch();

  const handleIncreaseClick = () => {
    const action = increase();
    dispatch(action);
  };
  // const handleDecreaseClick = () => {
  //   const action = decrease();
  //   dispatch(action);
  // };
  return (
    <Box
      className="box"
      width="360px"
      height="370px"
      border="1px solid "
      margin="10px"
    >
      <img
        alt={product.title}
        // style={{ margin: "20px auto", height: "200px", width: "250px" }}
        src={product.thumbnail}
      />
      <Heading fontSize="14px" className="box_text">
        {" "}
        {product.title}
      </Heading>
      <Heading paddingLeft="20px" paddingTop="10px" fontSize="20px">
        {product.price}
      </Heading>
      <Button marginLeft="100px" marginTop="20px">
        {product.button}
      </Button>
      <Button
        marginTop="20px"
        color="white"
        bgColor="black"
        onClick={handleIncreaseClick}
      >
        {product.button1}
      </Button>
    </Box>
  );
}

export default Product;

import { Box } from "@chakra-ui/layout";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

Header.propTypes = {};

function Header(props) {
  const count = useSelector((state) => state.count);

  return (
    <Box textAlign="center" padding="20px 40px">
      <Link to="/">Store</Link>
      <Link to="/about"> About</Link>
      <Link to="/cart"> Cart:{count} </Link>
    </Box>
  );
}

export default Header;

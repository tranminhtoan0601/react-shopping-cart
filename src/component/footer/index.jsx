import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";

Footer.propTypes = {};

function Footer(props) {
  return (
    <Box textAlign="center" color="gray" paddingTop="50px">
      <Heading fontSize="18px"> 2020 © React Store</Heading>
    </Box>
  );
}

export default Footer;

import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

About.propTypes = {};

function About(props) {
  return (
    <Box textAlign="center" paddingTop="40px">
      <Heading fontSize="40px" color="black">
        About
      </Heading>
      <Heading color="gray" fontSize="14px">
        This project was built for practice purposes using Context API by React.
      </Heading>
      <Button color="white" bgColor="black" marginTop="30px">
        VISIT REPO
      </Button>
    </Box>
  );
}

export default About;

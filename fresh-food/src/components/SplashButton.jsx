import { Button } from "@chakra-ui/react";
import React from "react";

const SplashButton = ({ title }) => {
  return (
   <>
    <Button width={"80%"} bgColor={"#00ff44"} borderRadius={"50px"} color={"white"} p={"5px"} _hover={{backgroundColor:"#00ff44"}}>
      {/* {title} */}
    </Button>
    <br /></>
  );
};

export default SplashButton;

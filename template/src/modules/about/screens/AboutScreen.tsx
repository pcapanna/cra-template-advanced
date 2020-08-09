import React from 'react';
import {PrivateContainer} from "../../layout";
import About from "../components/About";

const AboutScreen = () => {

  return (
    <PrivateContainer title={"About"}>
      <About/>
    </PrivateContainer>
  );
};

export default AboutScreen;

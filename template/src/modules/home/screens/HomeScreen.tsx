import React from 'react';
import {PrivateContainer} from "../../layout";
import DefaultComponent from "../components/DefaultComponent";

const HomeScreen = () => {

  return (
    <PrivateContainer title={"Home"}>
      <DefaultComponent/>
    </PrivateContainer>
  );
};

export default HomeScreen;

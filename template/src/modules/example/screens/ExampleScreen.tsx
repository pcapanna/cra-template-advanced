import React from 'react';
import ProductFeed from "../components/ProductFeed";
import {PrivateContainer} from "../../layout";
import RandomActionButton from "../components/RandomActionButton";

const ExampleScreen = () => {

  return (
    <PrivateContainer title={"Example"}>
      <div style={{marginTop: 10}}>
        <RandomActionButton/>
        <ProductFeed/>
      </div>
    </PrivateContainer>
  );
};

export default ExampleScreen;

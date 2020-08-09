import React, {useEffect} from 'react';
import {useIsLoadingProducts, useLoadProducts, useMakeRandomAction, useProducts} from "../hooks";
import useIsRandomActionMade from "../hooks/useIsRandomActionMade";
import {Button} from "@material-ui/core";

const RandomActionButton = () => {

  const makeRandomAction = useMakeRandomAction();
  const actionMade: boolean = useIsRandomActionMade();

  return (
      <Button variant={"outlined"}
              onClick={makeRandomAction}
              disabled={actionMade}>
        {!actionMade ? "Example Redux Action" : "Action Made"}
      </Button>
  );
};

export default RandomActionButton;

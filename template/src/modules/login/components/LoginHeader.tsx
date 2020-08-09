import React from 'react';
import {CardContent, Typography} from "@material-ui/core";

const LoginHeader = () => {

  return (
    <>
      <Typography variant="h5" component="h5">
        <b>Log in</b>
      </Typography>
      <Typography color="textSecondary">
        Not registered with us yet? No need to..
      </Typography>
    </>
  );
};

export default LoginHeader;

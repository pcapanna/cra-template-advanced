cra-template-advanced
======

Custom template for [Create React App](https://github.com/facebook/create-react-app) featuring redux, redux-saga, @material-ui and some serious examples of usage.
-----------------------------------------------------------------------------

Extends react-sripts official typescript template. Added redux, redux-sagas, react-router, @material-ui and other basic common dependencies in real day use.

Your initial Application will already have, out of the box:
 - A Login module, with basic configuration for an authentication flow.
 - A Layout module, with custom components to wrap your Screen Components.
 - A responsive Menu drawer module.
 - Example and About module, as examples of how to extend the application with your own modules with or without Redux.
 - An UI module, with some useful UI components.  
 
Most modules already use Redux.

To use this template, add `--template @pcapanna/cra-template-advanced` when creating a new app.

For example:

```shell
npx create-react-app my-app --template @pcapanna/cra-template-advanced

#or

yarn create react-app my-app --template @pcapanna/cra-template-advanced
```

Observations:
- In order make Login authentication work at some URL different to 'localhost:3000', you need to change constant GOOGLE CLIENT ID of the Login Module.
Go to src/modules/login/constant and replace constant GOOGLE_CLIENT_ID for your own. Follow Google's instructions to make another URL work.

# For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.

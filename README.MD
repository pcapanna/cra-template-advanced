# cra-template-advanced

This is an unofficial base template for [Create React App](https://github.com/facebook/create-react-app).

This templates extends react-sripts official typescript template. Adds support for redux, redux-sagas, react-router, @material-ui and basic app initialization and customization.

Now also features:
 - login module, with basic configuration an authentication flow for your application
 - layout module, an example application responsive Layout 
 - menu side drawer module, an example resposive side drawer for your application
 - example module, an example showing how to use redux for fetching data from an API
 - some personal UI modules 

To use this template, add `--template @pcapanna/cra-template-advanced` when creating a new app.

For example:

```shell
npx create-react-app my-app --template @pcapanna/cra-template-advanced

#or

yarn create react-app my-app --template @pcapanna/cra-template-advanced
```

Observations:
- To use LoginScreen component  on a public environment you need to change GOOGLE CLIENT ID.
Go to src/modules/login/constant and replace constant GOOGLE_CLIENT_ID for your own.

# For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.

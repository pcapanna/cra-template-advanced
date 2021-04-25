import {MODULE_NAME} from "./constants";
import {State as ModuleState} from "./reducers";
import ExtendedUser from "./components/google/User";

interface State extends Record<string, any> {
  [MODULE_NAME]: ModuleState
}

export const LoginError = (state: State): boolean => state[MODULE_NAME].loginError === true;
export const loginInProgress = (state: State): boolean => state[MODULE_NAME].loginInProgress === true;
export const isLogged = (state: State): boolean => !!state[MODULE_NAME].user;
export const getUser = (state: State): ExtendedUser => state[MODULE_NAME].user;
export const getUserName = (state: State): string => state[MODULE_NAME].user ? state[MODULE_NAME].user.name : undefined;
export const getUserImageUrl = (state: State): string => state[MODULE_NAME].user ? state[MODULE_NAME].user.imageUrl : undefined;
// export const user = (state: State) => state[MODULE_NAME].user;

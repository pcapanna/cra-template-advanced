import {MODULE_NAME} from "./constants";

export const isOpen = (state: any) => {
  if (!state) {
    return false;
  }

  return state[MODULE_NAME].open;
};

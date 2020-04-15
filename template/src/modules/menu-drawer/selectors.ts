import {MODULE_NAME} from "./constants";

export const isOpened = (state: any) => {
  if (!state) {
    return false;
  }

  return state[MODULE_NAME].opened;
};

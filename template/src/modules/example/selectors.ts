import {MODULE_NAME} from "./constants";
import {State as ModuleState} from "./reducers";
import {Product} from "../../model";

interface State extends Record<string, any> {
  [MODULE_NAME]: ModuleState
}

export const getProducts = (state: State): Product[] => state[MODULE_NAME].products;
export const isRandomActionMade = (state: State): boolean => state[MODULE_NAME].randomActionMade;
export const isLoadingProducts = (state: State): boolean => state[MODULE_NAME].loadingProducts;

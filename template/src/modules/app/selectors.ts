import {MODULE_NAME} from './constants'

export const isBootstrapped = state => state[MODULE_NAME] ? state[MODULE_NAME].bootstrapped : false;

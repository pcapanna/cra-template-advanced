import {AbstractEntity} from "./AbstractEntity";

export interface User extends AbstractEntity {
  id: string;
  name: string;
}

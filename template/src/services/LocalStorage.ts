import {StorageLite} from "./typings";

export class LocalStorage implements StorageLite{
    get(key) {
        return window.localStorage.getItem(`SANTANDER-MEETUPS|${key}`);
    }

    set(key, value) {
        window.localStorage.setItem(`SANTANDER-MEETUPS|${key}`, value);
    }

    remove(key) {
        window.localStorage.removeItem(`SANTANDER-MEETUPS|${key}`);
    }
}

const DefaultLocalStorage = new LocalStorage();

export default DefaultLocalStorage;

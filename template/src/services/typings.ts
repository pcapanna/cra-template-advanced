export interface StorageLite {
    get: (key) => any;
    set: (key, value) => void;
    remove: (key) => void;
}

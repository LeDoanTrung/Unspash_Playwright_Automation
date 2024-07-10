export class DataStorage {
    static #data = [];

    static initData() {
        DataStorage.#data = [];
    }

    static setData(value) {
        DataStorage.#data.push(value);
    }

    static getData() {
        return DataStorage.#data.pop(); 
    }

    static clearData() {
        DataStorage.#data = [];
    }
}

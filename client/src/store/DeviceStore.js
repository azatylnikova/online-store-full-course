import {makeAutoObservable} from "mobx"

export default class DeviceStore {

    constructor() {
        
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: '120000', rating: 5, img: 'https://img.mvideo.ru/Pdb/30067223b.jpg' },
            {id: 2, name: 'Смартфоны'}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) { ////// Создаем экшн
        this._types = types
    }

    setBrand(brands) {
        this._brands= brands
    }

    setDevices(devices) {
        this._devices = devices
    }
    

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}
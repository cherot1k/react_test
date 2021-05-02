import {makeAutoObservable} from "mobx";

export interface IGlobalStore {
    menuOpen: boolean,
    setMenu: (val: boolean) => void
}

class Menu implements IGlobalStore{
    menuOpen:boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    setMenu(val: boolean):void{
        this.menuOpen = val
    }
}

export const menuStore = new Menu()

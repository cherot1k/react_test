import {makeAutoObservable} from "mobx";

export type Photo = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export interface IPhoto {
    photos: Photo[] | [],
    setPhotos: (limit: number, page: number) => Promise<void>
}

class Photos implements IPhoto{
    photos: Photo[] = []

    constructor() {
        makeAutoObservable(this)
    }

    async setPhotos(limit: number, page: number){
        const data = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`)
        const array = await data.json()
        this.photos = this.photos.concat(array)
    }
}

export const photoStore = new Photos()
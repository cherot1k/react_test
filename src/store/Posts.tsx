import {makeAutoObservable} from "mobx";

export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface IPosts {
    posts: Post[] | [],
    setPosts: () => Promise<void>
}

class Posts implements IPosts{
    posts = []

    constructor() {
        makeAutoObservable(this)
    }

    async setPosts(){
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        this.posts = await data.json()
    }
}

export const postStore = new Posts()
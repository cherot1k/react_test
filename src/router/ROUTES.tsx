import {FC} from 'react'
import Login from "../pages/Login/Login";
import Posts from "../pages/Post/Posts";
import PostPage from "../pages/PostPage/PostPage";
import Photos from "../pages/Photos/Photos";
import Registration from "../pages/Registration/Registration";

export const LOGIN_ROUTE = '/login'
export const REGISTRATION_ROUTE = '/registration'

export const POSTS_ROUTE = '/posts'
export const POST_ITEM_ROUTE = '/posts/:id'
export const USERS_ROUTE = '/users'

interface IRoute{
    path: string,
    component: FC,
    exact: boolean
}


export const publicRoutes :IRoute[] = [
    {
        path: LOGIN_ROUTE,
        component: Login,
        exact: true
    },
    {
        path: REGISTRATION_ROUTE,
        component: Registration,
        exact: true
    }
]

export const privateRoutes :IRoute[] = [
    {
        path: POSTS_ROUTE,
        component: Posts,
        exact: true
    },
    {
        path: POST_ITEM_ROUTE,
        component: PostPage,
        exact: false
    },
    {
        path: USERS_ROUTE,
        component: Photos,
        exact: true
    }
]


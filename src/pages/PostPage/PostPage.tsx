import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router";
import {Post, postStore} from "../../store/Posts";
import Grid from "@material-ui/core/Grid";

interface TodoItemPageParams{
    id: string
}

const PostPage:FC = () => {
    const params = useParams<TodoItemPageParams>()

    const [item, setItem] = useState<Post>()

    useEffect(()=>{
        (async function (){
            try{
                const item:Post = postStore.posts[parseInt(params.id) - 1]

                if(!item.title) throw new Error()
                setItem(item)
            }catch (e){
                const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${parseInt(params.id)}`)
                const item:Post = await data.json()
                setItem(item)
                console.log(item)
            }
        })()

    },[params.id])

    return (
        <Grid>
            {item && <div>
                        <div className="">
                            <h1>{item.title} </h1>
                        </div>
                        <div className="">
                            {item.body}
                        </div>
                    </div>
            }
        </Grid>
    );
}

export default PostPage;
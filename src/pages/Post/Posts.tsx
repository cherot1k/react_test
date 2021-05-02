import React, {useEffect, FC} from 'react';
import {observer} from "mobx-react-lite";
import {Post, postStore} from "../../store/Posts";
import { Grid} from "@material-ui/core";
import PostItem from "../../components/PostItem/PostItem";


const Posts :FC = observer( () => {
    const posts: Post[] = postStore.posts

    useEffect(()=> {
        (async function (){
            await postStore.setPosts()
        })()
    },[])

    return (
        <Grid>
            {
                posts.map(post => {
                    return <PostItem post={post} key={post.body}/>
                })
            }

        </Grid>

    );
});

export default Posts;
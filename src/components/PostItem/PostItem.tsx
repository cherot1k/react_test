import React, {FC} from 'react';
import Grid from "@material-ui/core/Grid";
import {Post} from "../../store/Posts";
import {observer} from "mobx-react-lite";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router";

interface ITodoItem{
    post: Post
}

const useStyles = makeStyles(() =>
    createStyles({
        card:{
            padding: '5px',
            border: '1px solid black',
            margin: '20px auto',
            cursor: 'pointer'
        }
    }),
);

const PostItem:FC<ITodoItem> = observer( ({post}) => {
    const classes = useStyles()
    const history = useHistory()

    const openPage = (object:Post) => {
        history.push(`/posts/${object.id}`)
    }

    return (
        <Grid item md={6} className={classes.card}>
            <Grid onClick={()=> openPage(post)}>
                <h3>{post.title}</h3>
                <span>{post.body}</span>
            </Grid>
        </Grid>
    );
});

export default PostItem;
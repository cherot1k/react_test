import React, { useRef} from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";
import {Photo, photoStore} from "../../store/Photoes";
import {observer} from "mobx-react-lite";
import useScroll from "../../hooks/useScroll";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin:'auto',
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

const Photos = observer( () => {
    const photos : Photo[] = photoStore.photos

    let parentRef: React.MutableRefObject<any> = useRef<HTMLDivElement>()
    let childRef: React.MutableRefObject<any> = useRef<HTMLDivElement>()

    const intersected = useScroll(parentRef, childRef)


    const classes = useStyles();
    return (
        <Grid item md={6} className={classes.root}>
            {
                photos.map(photo => {
                    return <ListItem key={photo.id}>
                        <ListItemAvatar>
                            <Avatar>
                                <img src={photo.url} alt='image'/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={photo.id} secondary="Jan 9, 2014" />
                    </ListItem>
                })
            }
            <div style={{width: '100%'}} ref={childRef}/>
        </Grid>

    );
});

export default Photos;



// <div ref={parentRef} style={{overflow: 'auto'}}>
//     <Grid item md={6} className={classes.root} >
//         <List>
//             {
//                 photos.map(photo => {
//                     return <ListItem key={photo.id}>
//                         <ListItemAvatar>
//                             <Avatar>
//                                 <img src={photo.url} alt='image'/>
//                             </Avatar>
//                         </ListItemAvatar>
//                         <ListItemText primary={photo.id} secondary="Jan 9, 2014" />
//                     </ListItem>
//                 })
//             }
//         </List>
//     </Grid>
//     <Button style={{width: '100%'}} ref={childRef}> 123 </Button>
// </div>

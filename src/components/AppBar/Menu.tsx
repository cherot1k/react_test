import React, {useContext} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {observer} from "mobx-react-lite";
import {Box, Button} from "@material-ui/core";
import {FireContext} from "../../context/FirebaseContext";
import {useAuthState} from "react-firebase-hooks/auth";
import {ExitToApp} from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            zIndex:1000
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            fontSize: '20px',
            flexGrow: 1,
            alignContent: 'start'
        },
        spacer:{
            flexGrow: 1
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
    }),
);

const Menu = observer( () => {
    const classes = useStyles();

    // @ts-ignore
    const {auth} = useContext(FireContext)
    const [user, loading, error] = useAuthState(auth)

    const logout = async () => {
        await auth.signOut()
    }

    if(loading){
        return <></>
    }

    return (
        <Box component='nav' className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Simple App
                    </Typography>
                    <div className="spacer"/>
                    {user? <Button onClick={logout}> <ExitToApp style={{color: 'white'}}/> </Button>  : <></>}
                </Toolbar>
            </AppBar>
        </Box>
    );
})

export default Menu
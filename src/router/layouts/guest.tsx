import React, {FC} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Menu from "../../components/AppBar/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import {Grid} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);
const Guest: FC = ({children}) => {
    const classes = useStyles()

    return (
        <Grid>
            <CssBaseline />
            <Menu/>
            <main className={classes.content}>
                <Toolbar />
                {children}
            </main>
        </Grid>
    );
};

export default Guest;
import React, {FC} from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Toolbar from "@material-ui/core/Toolbar";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import People from '@material-ui/icons/People';
import {observer} from "mobx-react-lite";
import {DRAWER_WIDTH} from "../../constants/CSS_CONST";
import Grid from "@material-ui/core/Grid";
import {Link} from 'react-router-dom'

const useStyles = makeStyles(() =>
    createStyles({
        drawer: {
            width: DRAWER_WIDTH,
            flexShrink: 0,
            zIndex: 1
        },
        drawerPaper: {
            width: DRAWER_WIDTH,
        },
        drawerContainer: {
            overflow: 'auto',
        },
    }),
);

const AppSidebar :FC = observer(() => {
    const classes = useStyles();

    return (
        <Grid component='aside' className={classes.drawer}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        <Link to="/posts" style={{color:'black', textDecoration: "none"}}>
                            <ListItem button>
                                <ListItemIcon>
                                    <FormatListBulleted />
                                </ListItemIcon>
                                <ListItemText primary={'Post'}  />
                            </ListItem>
                        </Link>


                        <Link to="/users" style={{color:'black', textDecoration: "none"}}>
                            <ListItem button>
                                <ListItemIcon>
                                    <People />
                                </ListItemIcon>
                                <ListItemText primary={'People'} />
                            </ListItem>
                        </Link>
                    </List>
                    <Divider />
                </div>
            </Drawer>
        </Grid>
    );
});

export default AppSidebar;
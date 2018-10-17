import React from 'react';
import {createStyles, Typography, withStyles, WithStyles} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import NavBar from "./NavBar";
import UserInfo from "./UserInfo";

const styles = createStyles({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});

interface UserInfoProps extends WithStyles<typeof styles> {
}

function Header(props: UserInfoProps) {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <NavBar/>
                    <Typography variant="h6" color="inherit" className={classes.grow}/>
                    <UserInfo/>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(Header);
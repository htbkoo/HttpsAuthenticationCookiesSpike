import React from 'react';

import Header from "./Header";
import {createStyles, withStyles, WithStyles} from "@material-ui/core";

const styles = () => createStyles({
    layout: {
        margin: 20,
        padding: 20,
        border: '1px solid #DDD'
    }
});

interface LayoutProps extends WithStyles<typeof styles> {
    children: React.ReactNode,
    auth: boolean
}

const Layout = (props: LayoutProps) => (
    <div className={props.classes.layout}>
        <Header auth={props.auth}/>
        {props.children}
    </div>
);

export default withStyles(styles)(Layout);
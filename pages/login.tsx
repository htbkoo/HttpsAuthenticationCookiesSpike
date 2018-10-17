/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import {createStyles, WithStyles, withStyles} from '@material-ui/core/styles';

import userInfoService, {Cookies} from "../src/main/typescript/services/userInfoService";
import Router from "next/router";
import {Button, Paper, Typography} from "@material-ui/core";
import Link from "next/link";

const styles = theme => createStyles({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
});

interface IndexProps extends WithStyles<typeof styles>, Cookies {
}

type IndexState = {
    open: boolean
}

function alwaysRedirect(ctx, url: string) {
    if (ctx && ctx.req) {
        console.log('server side');
        ctx.res.writeHead(301, {Location: url});
        return ctx.res.end();
    } else {
        console.log('client side');
        return Router.push(url);
    }
}

class Login extends React.Component<IndexProps, IndexState> {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="h5" component="h3">
                        Login by clicking on the button
                    </Typography>
                    <Link href="/">
                        <Button onClick={() => userInfoService.set()}>Login</Button>
                    </Link>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Login);

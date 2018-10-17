/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Link from 'next/link';
import Layout from "../src/main/typescript/components/MyLayout";

const styles = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
});

function About(props: { classes: { root: string } }) {
    const {classes} = props;

    return (
        <Layout>
            <div className={classes.root}>
                <Typography variant="h4" gutterBottom>
                    Material-UI
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    about page
                </Typography>
                <Typography gutterBottom>
                    <Link href="/">
                        <a>Go to the main page</a>
                    </Link>
                </Typography>
                <Button variant="contained" color="primary">
                    Do nothing button
                </Button>
            </div>
        </Layout>
    );
}

export default withStyles(styles as any)(About as any);

/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {StyleRulesCallback, withStyles} from '@material-ui/core/styles';
import Layout from "../src/main/typescript/components/MyLayout";

const styles: StyleRulesCallback = theme => ({
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
                <Button variant="contained" color="primary">
                    Do nothing button
                </Button>
            </div>
        </Layout>
    );
}

export default withStyles(styles)(About as any);

/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {createStyles, StyleRulesCallback, WithStyles, withStyles} from '@material-ui/core/styles';
import Layout from "../src/main/typescript/components/MyLayout";
import userInfoService from "../src/main/typescript/services/userInfoService";

const styles: StyleRulesCallback = theme => createStyles({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
});

interface Props extends WithStyles<typeof styles> {
}

function About(props: Props) {
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

About.getInitialProps = async () => await userInfoService.retrieve();

export default withStyles(styles)(About);

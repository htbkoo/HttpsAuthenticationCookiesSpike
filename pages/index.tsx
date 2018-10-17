/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import {createStyles, WithStyles, withStyles} from '@material-ui/core/styles';

import Layout from "../src/main/typescript/components/MyLayout";
import userInfoService from "../src/main/typescript/services/userInfoService";

const styles = theme => createStyles({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
});

interface IndexProps extends WithStyles<typeof styles> {
}

type IndexState = {
    open: boolean
}

class Index extends React.Component<IndexProps, IndexState> {
    static async getInitialProps() {
        let cookies = await userInfoService.retrieve();
        console.log(`loading getInitialProps in Index: cookies.auth=${cookies.auth}`);
        return cookies;
    }

    state = {
        open: false,
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    handleClick = () => {
        this.setState({
            open: true,
        });
    };

    render() {
        const {classes} = this.props;
        const {open} = this.state;

        return (
            <Layout>
                <div className={classes.root}>
                    <Dialog open={open} onClose={this.handleClose}>
                        <DialogTitle>Super Secret Password</DialogTitle>
                        <DialogContent>
                            <DialogContentText>1-2-3-4-5</DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button color="primary" onClick={this.handleClose}>
                                OK
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Typography variant="h4" gutterBottom>
                        Material-UI
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        example project
                    </Typography>
                    <Button variant="contained" color="secondary" onClick={this.handleClick}>
                        Super Secret Password
                    </Button>
                </div>
            </Layout>
        );
    }
}

export default withStyles(styles)(Index);

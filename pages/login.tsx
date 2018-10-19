/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import {createStyles, WithStyles, withStyles} from '@material-ui/core/styles';

import userInfoService, {Cookies} from "../src/main/typescript/services/userInfoService";
import {Button, Paper, TextField, Typography} from "@material-ui/core";
import Link from "next/link";

const styles = theme => createStyles({
    root: {
        textAlign: 'center',
        padding: theme.spacing.unit * 10,
        paddingTop: theme.spacing.unit * 20,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "60%",
    },
    form: {}
});

interface IndexProps extends WithStyles<typeof styles>, Cookies {
}

enum FIELDS {
    NAME = "name"
}

type IndexState = {
    [k in FIELDS]: string
}

class Login extends React.Component<IndexProps, IndexState> {
    constructor(props: IndexProps) {
        super(props);
        this.state = {
            [FIELDS.NAME]: ""
        };
        console.log(this.state);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(field: FIELDS) {
        return event => {
            console.log(field);
            console.log(event);
            console.log(event.target.value);
            let state = {[field]: event.target.value};
            console.log(state);
            return this.setState(state);
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="h5" component="h3">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField
                            id="username"
                            label="Username"
                            className={classes.textField}
                            value={this.state[FIELDS.NAME]}
                            onChange={this.handleChange(FIELDS.NAME)}
                            margin="normal"
                        />
                        <TextField
                            id="password"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                        />
                    </form>
                    <Link href="/">
                        <Button onClick={() => userInfoService.set()} variant="raised">Login</Button>
                    </Link>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Login);

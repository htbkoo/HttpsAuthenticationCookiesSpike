/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import {createStyles, WithStyles, withStyles} from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';

import {Cookies} from "../src/main/typescript/services/userInfoService";
import {Button, Paper, TextField, Typography} from "@material-ui/core";

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
    NAME = "name",
    PASSWORD = "password"
}

type IndexState = {
    [k in FIELDS]: string
}

class Login extends React.Component<IndexProps, IndexState> {
    constructor(props: IndexProps) {
        super(props);
        this.state = {
            [FIELDS.NAME]: "",
            [FIELDS.PASSWORD]: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLoginButtonClick = this.handleLoginButtonClick.bind(this);
    }

    handleChange(field: FIELDS) {
        return event => this.setState({[field]: event.target.value} as {})
    }

    handleLoginButtonClick() {
        return fetch('/login', {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Basic ' + btoa(`${this.state[FIELDS.NAME]}:${this.state[FIELDS.PASSWORD]}`),
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            // headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({})
        })
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error(err));
    }

    getLoginTextField({isPassword = false, field, id, label, className}) {
        return (
            <TextField
                id={id}
                label={label}
                className={className}
                value={this.state[field]}
                onChange={this.handleChange(field)}
                type={isPassword ? "password" : "text"}
                margin="normal"
            />
        )
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="h5" component="h3">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate autoComplete="off">
                        {this.getLoginTextField({
                            field: FIELDS.NAME,
                            id: "username",
                            label: "username",
                            className: classes.textField
                        })}
                        {this.getLoginTextField({
                            isPassword: true,
                            field: FIELDS.PASSWORD,
                            id: "password",
                            label: "password",
                            className: classes.textField
                        })}
                    </form>
                    <Button onClick={this.handleLoginButtonClick} variant="contained">Login</Button>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Login);

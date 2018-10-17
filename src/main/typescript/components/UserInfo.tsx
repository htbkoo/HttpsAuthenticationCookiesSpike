import React from 'react';
import {createStyles, WithStyles, withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Button} from "@material-ui/core";
import Link from "next/link";
import userInfoService from "../services/userInfoService";

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

class UserInfo extends React.Component<UserInfoProps> {
    state = {
        auth: false,
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    async componentDidMount() {
        let {auth} = await userInfoService.retrieve();
        this.setState({auth});
    }

    render() {
        const {anchorEl, auth} = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>
                {auth
                    ? (
                        <div>
                            <IconButton
                                aria-owns={open ? 'menu-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                <Link href="/">
                                    <MenuItem onClick={() => {
                                        userInfoService.remove();
                                        window.location.href = '/';
                                    }}>Logout</MenuItem>
                                </Link>
                            </Menu>
                        </div>
                    )
                    : (
                        <div>
                            <Link href="/login">
                                <Button color="inherit">Login</Button>
                            </Link>
                        </div>
                    )}
            </div>
        );
    }
}

export default withStyles(styles)(UserInfo);
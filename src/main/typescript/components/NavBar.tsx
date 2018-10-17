import React from 'react';
import Link from 'next/link';
import Typography from "@material-ui/core/Typography/Typography";
import {withStyles, WithStyles} from "@material-ui/core";

const styles = {
    link: {
        marginRight: 15
    }
};

interface Props extends WithStyles<typeof styles> {

}

const NavBar = (props: Props) => (
    <Typography gutterBottom>
        <Link href="/">
            <a className={props.classes.link}>Home</a>
        </Link>
        <Link href="/about">
            <a className={props.classes.link}>About</a>
        </Link>
    </Typography>
);

export default withStyles(styles)(NavBar);
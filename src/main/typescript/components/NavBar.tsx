import React from 'react';
import Link from 'next/link';
import Typography from "@material-ui/core/Typography/Typography";
import {Button, createStyles, withStyles, WithStyles} from "@material-ui/core";

const styles = theme => createStyles({
    link: {
        margin: theme.spacing.unit,
        marginRight: 15
    }
});

interface Props extends WithStyles<typeof styles> {

}

const NavBar = (props: Props) => (
    <Typography gutterBottom>
        <Link href="/">
            <Button color="inherit" className={props.classes.link}>Home</Button>
        </Link>
        <Link href="/about">
            <Button color="inherit" className={props.classes.link}>About</Button>
        </Link>
    </Typography>
);

export default withStyles(styles)(NavBar);
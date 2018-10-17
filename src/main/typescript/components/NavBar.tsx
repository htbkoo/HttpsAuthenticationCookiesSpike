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

const NavBar = (props: Props) => {
    const LinkButton = ({href, text}: { href: string, text: string }) => (
        <Link href={href}>
            <Button color="inherit" className={props.classes.link}>{text}</Button>
        </Link>
    );

    return (
        <Typography gutterBottom>
            <LinkButton href="/" text="Home"/>
            <LinkButton href="/about" text="About"/>
        </Typography>
    )
};

export default withStyles(styles)(NavBar);
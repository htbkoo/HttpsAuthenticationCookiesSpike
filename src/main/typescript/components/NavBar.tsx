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

const LinkButton = ({href, text, className}: { href: string, text: string, className: string }) => (
    <Link href={href}>
        <Button color="inherit" className={className}>{text}</Button>
    </Link>
);

const NavBar = (props: Props) => (
    <Typography gutterBottom>
        <LinkButton href="/" text="Home" className={props.classes.link}/>
        <LinkButton href="/about" text="About" className={props.classes.link}/>
    </Typography>
);

export default withStyles(styles)(NavBar);
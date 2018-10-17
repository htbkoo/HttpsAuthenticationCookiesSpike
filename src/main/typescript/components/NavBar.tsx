import React from 'react';
import Link from 'next/link';
import Typography from "@material-ui/core/Typography/Typography";

const linkStyle = {
    marginRight: 15
};

const NavBar = () => (
    <Typography gutterBottom>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </Typography>
);

export default NavBar;
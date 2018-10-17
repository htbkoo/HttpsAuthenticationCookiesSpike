import React from 'react';

import NavBar from "./NavBar";
import UserInfo from "./UserInfo";
import {createStyles, WithStyles} from "@material-ui/core";

const styles = () => createStyles({
    header: {
        display: "flex"
    },
});

interface Props extends WithStyles<typeof styles>{

}

const Header = (props:Props) => (
    <div className={props.classes.header}>
        <NavBar/>
        <UserInfo/>
    </div>
);

export default Header;
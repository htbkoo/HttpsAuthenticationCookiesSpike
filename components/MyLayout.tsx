import React from 'react';

import Header from "./Header";

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

type LayoutProps = {
    children: React.ReactNode
}

const Layout = (props: LayoutProps) => (
    <div style={layoutStyle}>
        <Header/>
        {props.children}
    </div>
);

export default Layout;
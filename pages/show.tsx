import React from 'react';
import {withRouter} from "next/router";
import fetch from 'isomorphic-unfetch';

import Layout from "../src/main/typescript/components/MyLayout";

const Content = withRouter((props: any) => (
    <div>
        <h1>{props.show.name}</h1>
        <h1>{props.show.summary.replace(/<[/]?p>/g, '')}</h1>
        <img src={props.show.image.medium}/>
    </div>
));

const Show = (props) => (
    <Layout>
        <Content show={props.show}/>
    </Layout>
);

Show.getInitialProps = async function (context) {
    const {id} = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    return {show};
};

export default Show;
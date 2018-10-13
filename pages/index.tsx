import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from "../components/MyLayout";

const ShowsList = ({shows}) => (
    <ul>
        {shows.map(({show}) => (
            <li key={show.id}>
                <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                    <a>{show.name}</a>
                </Link>
            </li>
        ))}
    </ul>
);

const Index = (props) => (
    <Layout>
        <h1>My Blog</h1>
        <ShowsList shows={props.shows}/>
    </Layout>
);

Index.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data
    };
};

export default Index;
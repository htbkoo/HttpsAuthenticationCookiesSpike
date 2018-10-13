import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from "../components/MyLayout";

type PostLinkProps = {
    title: string,
    id: string
}

const PostLink = ({title, id}: PostLinkProps) => (
    <li>
        <Link as={`/p/${id}`} href={`/post?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li>
);

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
        <ul>
            <PostLink id="hello-nextjs" title="Hello Next.js"/>
            <PostLink id="learn-nextjs" title="Learn"/>
            <PostLink id="deploy-nextjs" title="Deploy"/>
        </ul>
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
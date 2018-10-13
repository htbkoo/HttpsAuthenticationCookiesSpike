import React from 'react';
import Link from 'next/link';

import Layout from "../components/MyLayout";

type PostLinkProps = {
    title: string
}

const PostLink = ({title}: PostLinkProps) => (
    <li>
        <Link href={`/post?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li>
);

const Index = () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink title="Hello Next.js"/>
            <PostLink title="Learn"/>
            <PostLink title="Deploy"/>
        </ul>
    </Layout>
);

export default Index;
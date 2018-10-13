import React from 'react';
import Link from 'next/link';

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

const Index = () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink id="hello-nextjs" title="Hello Next.js"/>
            <PostLink id="learn-nextjs" title="Learn"/>
            <PostLink id="deploy-nextjs" title="Deploy"/>
        </ul>
    </Layout>
);

export default Index;
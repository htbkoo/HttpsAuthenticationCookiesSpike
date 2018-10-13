import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from "../components/MyLayout";

const PostsList = ({posts}) => (
    <div>
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
                        <a>{post.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
        <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
    </div>
);

const ShowsList = ({shows}) => (
    <ul>
        {shows.map(({show}) => (
            <li key={show.id}>
                <Link as={`/s/${show.id}`} href={`/show?id=${show.id}`}>
                    <a>{show.name}</a>
                </Link>
            </li>
        ))}
    </ul>
);

const Index = (props) => (
    <Layout>
        <h1>My Blog</h1>
        <PostsList posts={getPosts()}/>
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

function getPosts() {
    return [
        {id: 'hello-nextjs', title: 'Hello Next.js'},
        {id: 'learn-nextjs', title: 'Learn Next.js'},
        {id: 'deploy-nextjs', title: 'Deploy Next.js'},
    ];
}

export default Index;
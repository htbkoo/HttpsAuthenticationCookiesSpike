import React from 'react';
import {withRouter} from "next/router";

import Layout from "../components/MyLayout";

const Content = withRouter((props: any) => (
    <div>
        <h1>{resolveTitle(props)}</h1>
        <p>This is the blog post content</p>
    </div>
));

const Post = () => (
    <Layout>
        <Content/>
    </Layout>
);

function resolveTitle(props: any) {
    return props.router.query.title;
}

export default Post;
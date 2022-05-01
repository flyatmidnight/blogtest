import React from 'react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { Header } from './header';
import { Footer } from './footer';
import { PostList } from './post-list';

const components = {};

export default function Blog(props) {
  const { meta, route, pageMap, ...rest } = props;

  const blogPosts = pageMap
    .find(({ name }) => name === 'blog')
    .children.filter((post) => post.frontMatter.draft !== true);

  blogPosts.sort((a, b) => (a.date <= b.date ? 1 : -1));

  const sharedHead = (
    <Head>
      <title>Dom Eccleston's blog</title>
      <meta property="og:title" content={meta.title} />
      <meta property="og:site_name" content="Dom Eccleston's blog" />
      <meta property="og:description" content={meta.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dom__inic" />
      <meta property="og:image" content={meta.og} />
      <link rel="icon" type="image/png" href="/d.png" />
    </Head>
  );

  if (route == '/') {
    return function Layout({ children }) {
      return (
        <div className="min-h-screen relative">
          {sharedHead}
          <Header />
          <PostList posts={blogPosts} />
          {children}
          <Footer />
        </div>
      );
    };
  }

  return function Layout({ children }) {
    return (
      <div className="w-full">
        {sharedHead}
        <Header />
        <div className="min-h-screen lg:max-w-3xl dark:prose-invert prose mx-auto px-4 pt-10 pb-28">
          <MDXProvider components={components}>{children}</MDXProvider>
        </div>
        <Footer />
      </div>
    );
  };
}

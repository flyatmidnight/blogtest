import React from 'react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { Header } from './header';
import { Footer } from './footer';
import { PostList } from './post-list';

const components = {};

export default function Blog(props) {
  const { meta, route, pageMap, ...rest } = props;

  const blogPosts = pageMap.find(({ name }) => name === 'blog').children;

  blogPosts.sort((a, b) => (a.date <= b.date ? 1 : -1));

  const sharedHead = (
    <Head>
      <meta property="og:title" content={meta.title} />
      <meta property="og:site_name" content="Jared Palmer's blog" />
      <meta property="og:description" content={meta.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jaredpalmer" />
      <meta property="og:image" content={meta.og} />
    </Head>
  );

  if (route == '/') {
    return function Layout({ children }) {
      return (
        <div className="h-screen relative">
          {sharedHead}
          <Header />
          <PostList posts={blogPosts} />
          {children}
          <Footer />
        </div>
      );
    };
  }

  if (route.startsWith('/blog') || route === '/about') {
    return function Layout({ children }) {
      return (
        <>
          {sharedHead}
          <Header />
          <div className="h-screen relative dark:prose-invert prose mx-auto px-4 py-8">
            <MDXProvider components={components}>{children}</MDXProvider>
          </div>
          <Footer />
        </>
      );
    };
  }

  return function Layout({ children }) {
    return (
      <div className="h-screen relative">
        {sharedHead}
        <Header />
        {children}
        <Footer />
      </div>
    );
  };
}

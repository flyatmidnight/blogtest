import Link from 'next/link';

function Post({ title, date, slug }) {
  return (
    <div className="flex justify-between pb-3">
      <Link href={slug}>
        <a>
          <p>{title}</p>
        </a>
      </Link>
      <p>{date}</p>
    </div>
  );
}

export function PostList({ posts }) {
  console.log(posts);
  return (
    <>
      <div className="lg:max-w-3xl ">
        {posts.map((post) => (
          <Post
            key={post.frontMatter.date + post.name}
            slug={post.route}
            title={post.frontMatter.title}
            date={post.frontMatter.date}
            />
        ))}
      </div>
    </>
  );
}

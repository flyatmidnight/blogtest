import Link from 'next/link';

function Post({ title, date, slug }) {
  return (
    <div className="flex justify-between pb-3">
      <Link href={slug}>
        <a>
          <p className="inline-block pr-12 text-gray-600 dark:text-gray-400">{date}</p>
          <p className="inline-block font-semibold text-[#0b00e6] dark:text-gray-100">{title}</p>
        </a>
      </Link>
    </div>
  );
}

export function PostList({ posts }) {
  return (
    <>
      <div className="lg:max-w-3xl mx-auto px-4 lg:px-8 py-10">
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

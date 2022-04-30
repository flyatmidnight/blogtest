import posts from '../posts.json';
import Link from 'next/link';
import { Header } from '../components/header';

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

export default function Home(props) {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-8 py-11">
        {posts.posts.map((post) => (
          <Post key={post.date} {...post} />
        ))}
      </div>
    </>
  );
}

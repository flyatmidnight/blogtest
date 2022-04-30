import Link from 'next/link';

export function Header() {
  return (
    <div className="absolute left-10 top-10">
      <p className="font-semibold pb-1">Dom Eccleston</p>
      <Link href="/">
        <a>
          <p className="pb-1">Posts</p>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <p className="pb-1">About</p>
        </a>
      </Link>
      <p className="pb-1">Dark</p>
    </div>
  );
}

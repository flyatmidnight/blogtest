import Link from 'next/link';
import { useRouter } from 'next/router';

import { useDarkMode } from '../lib/use-dark-mode';

const headerLinks = [
  {
    path: '/',
    text: 'Posts',
  },
  {
    path: '/about',
    text: 'About',
  },
];

function HeaderLink({ path, text }) {
  const router = useRouter();
  const isActive = router.asPath === path;
  return (
    <>
      <Link href={path}>
        <a>
          <p className={`inline-block pb-1 ${isActive ? 'underline' : ''}`}>
            {text}
          </p>
        </a>
      </Link>
      <br />
    </>
  );
}

export function Header() {
  const { theme, toggleTheme, mounted } = useDarkMode();

  return (
    <header className="lg:absolute pt-4 px-4 lg:pt-0 lg:px-4 left-8 top-10">
      <p className="font-semibold pb-1.5">Dom Eccleston</p>
      {headerLinks.map(({ path, text }) => (
        <HeaderLink key={path + text} path={path} text={text} />
      ))}
      <p
        className="inline pb-1 cursor-pointer"
        onClick={() => toggleTheme(theme)}
      >
        {theme === 'dark' ? 'Light' : 'Dark'}
      </p>
      <br />
    </header>
  );
}

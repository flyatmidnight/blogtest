import { ThemeProvider } from 'next-themes';

import 'tailwindcss/tailwind.css';
import '../styles/main.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" storageKey="dominics-theme">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

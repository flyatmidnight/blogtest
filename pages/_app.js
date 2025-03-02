import { ThemeProvider } from 'next-themes';

import 'tailwindcss/tailwind.css';
import '../styles/main.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
    <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

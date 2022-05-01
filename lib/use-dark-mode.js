import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export function useDarkMode() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = (theme) => {
    return theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return {
    theme,
    toggleTheme,
    mounted,
  };
}

import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export function getSlugs(directory) {
  const location = join(process.cwd(), directory);
  return fs.readdirSync(location);
}

export function getContentBySlug(slug, dir) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(process.cwd(), dir, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);
  return data;
}

export function fetchMarkdownContent(dir = 'pages/blog') {
  const slugs = getSlugs(dir);
  const content = slugs.map((slug) => getContentBySlug(slug, dir));
  return content;
}

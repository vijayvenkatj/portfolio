import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export type BlogPost = {
  slug: string;
  meta: {
    title: string;
    date: string;
    description: string;
    tags: string[];
    [key: string]: any;
  };
  content: string;
};

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: realSlug,
      meta: data as BlogPost['meta'],
      content,
    };
  } catch (e) {
    return undefined;
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  // Create directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(postsDirectory);

  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const fileContents = fs.readFileSync(path.join(postsDirectory, file), 'utf8');
      const { data } = matter(fileContents);
      
      return {
        slug: file.replace(/\.mdx$/, ''),
        meta: data as BlogPost['meta'],
        content: '', // We don't need content for the list
      };
    })
    .sort((a, b) => (new Date(b.meta.date) > new Date(a.meta.date) ? 1 : -1));

  return posts;
}

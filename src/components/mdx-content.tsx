import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';

const components = {
    // Add custom components here if needed
};

const options = {
    theme: 'catppuccin-mocha',
    keepBackground: true,
};

export default function MDXContent({ source }: { source: string }) {
    return (
        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-stone-300 prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline prose-code:text-purple-300 prose-pre:bg-stone-900/80 prose-pre:border prose-pre:border-white/10">
            <MDXRemote
                source={source}
                components={components}
                options={{
                    mdxOptions: {
                        rehypePlugins: [[rehypePrettyCode as any, options]],
                    },
                }}
            />
        </div>
    );
}

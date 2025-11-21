import Link from 'next/link';
import { BlogPost } from '@/lib/mdx';
import { Calendar, ArrowRight } from 'lucide-react';

export default function BlogCard({ post }: { post: BlogPost }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block">
            <article className="bg-stone-900/40 border border-white/5 rounded-2xl p-6 hover:bg-stone-900/60 hover:border-purple-400/30 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-3 text-sm text-stone-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.meta.date}>{post.meta.date}</time>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {post.meta.title}
                </h3>

                <p className="text-stone-300 mb-4 flex-grow line-clamp-3">
                    {post.meta.description}
                </p>

                <div className="flex items-center text-purple-400 font-medium text-sm mt-auto group-hover:translate-x-1 transition-transform">
                    Read more <ArrowRight className="w-4 h-4 ml-1" />
                </div>
            </article>
        </Link>
    );
}

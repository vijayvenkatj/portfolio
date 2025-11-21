import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { ArrowRight, Calendar } from 'lucide-react';

export default async function LatestBlogs({ compact = false }: { compact?: boolean }) {
    const posts = await getAllPosts();
    const latestPosts = posts.slice(0, 3);

    if (latestPosts.length === 0) return null;

    if (compact) {
        return (
            <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">Latest Articles</h3>
                    <Link
                        href="/blog"
                        className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
                    >
                        View all
                    </Link>
                </div>
                <div className="space-y-4">
                    {latestPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                            <article className="bg-stone-950/80 border border-white/10 rounded-xl p-5 hover:border-purple-400/30 transition-all duration-300 hover:bg-stone-900/80">
                                <div className="flex items-center gap-2 text-xs text-stone-400 mb-3">
                                    <Calendar className="w-3 h-3" />
                                    <time dateTime={post.meta.date}>{post.meta.date}</time>
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2 leading-snug">
                                    {post.meta.title}
                                </h4>
                                <p className="text-stone-400 text-sm line-clamp-2 leading-relaxed">
                                    {post.meta.description}
                                </p>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <section id="blog" className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Articles</span>
                    </h2>
                    <Link
                        href="/blog"
                        className="hidden md:flex items-center text-stone-400 hover:text-white transition-colors group"
                    >
                        View all posts
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {latestPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                            <article className="bg-stone-900/40 border border-white/5 rounded-2xl p-6 hover:bg-stone-900/60 hover:border-purple-400/30 transition-all duration-300 h-full flex flex-col">
                                <div className="flex items-center gap-3 text-sm text-stone-400 mb-3">
                                    <Calendar className="w-4 h-4" />
                                    <time dateTime={post.meta.date}>{post.meta.date}</time>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                                    {post.meta.title}
                                </h3>

                                <p className="text-stone-300 mb-4 flex-grow line-clamp-3 text-sm leading-relaxed">
                                    {post.meta.description}
                                </p>

                                <div className="flex items-center text-purple-400 font-medium text-sm mt-auto group-hover:translate-x-1 transition-transform">
                                    Read article <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-stone-400 hover:text-white transition-colors"
                    >
                        View all posts
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

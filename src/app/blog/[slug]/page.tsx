import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import MDXContent from '@/components/mdx-content';
import { notFound } from 'next/navigation';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import PortfolioBackground from '@/components/background';
import BlogLayout from '@/components/blog-layout';
import Link from 'next/link';

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.meta.title} | Vijay Venkat J`,
        description: post.meta.description,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="relative min-h-screen overflow-auto">
            {/* Fixed Background */}
            <div className="fixed inset-0 z-0">
                <PortfolioBackground />
            </div>

            {/* Main Content */}
            <BlogLayout>
                <main className="relative z-20 min-h-screen pb-20 px-4 sm:px-6 lg:px-8">
                    <article className="max-w-3xl lg:max-w-5xl mx-auto">
                        <div className="mb-8">
                            <Link
                                href="/blog"
                                className="inline-flex items-center px-4 py-2 rounded-full bg-stone-900/50 border border-white/10 text-stone-400 hover:text-white hover:bg-stone-800 hover:border-purple-400/30 transition-all duration-300 group"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                Back to Blog
                            </Link>
                        </div>

                        <header className="mb-10">
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                {post.meta.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-4 text-stone-400 text-sm mb-6">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <time dateTime={post.meta.date}>{post.meta.date}</time>
                                </div>
                                {post.meta.tags && (
                                    <div className="flex items-center gap-2">
                                        <Tag className="w-4 h-4" />
                                        <div className="flex gap-2">
                                            {post.meta.tags.map((tag) => (
                                                <span key={tag} className="bg-stone-900 px-2 py-1 rounded text-xs text-stone-300 border border-white/10">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </header>

                        <div className="bg-stone-900/20 border border-white/5 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
                            <MDXContent source={post.content} />
                        </div>
                    </article>
                </main>
            </BlogLayout>
        </div>
    );
}

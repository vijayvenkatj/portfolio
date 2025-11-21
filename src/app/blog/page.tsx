import { getAllPosts } from '@/lib/mdx';
import BlogCard from '@/components/blog-card';
import PortfolioBackground from '@/components/background';

export const metadata = {
    title: 'Blog | Vijay Venkat J',
    description: 'Thoughts on software development, cybersecurity, and technology.',
};

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <div className="relative min-h-screen overflow-auto">
            {/* Fixed Background */}
            <div className="fixed inset-0 z-0">
                <PortfolioBackground />
            </div>

            {/* Main Content */}
            <main className="relative z-20 min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Blog</span>
                        </h1>
                        <p className="text-lg text-stone-400 max-w-2xl mx-auto">
                            Sharing my journey, learnings, and thoughts on technology, coding, and everything in between.
                        </p>
                    </div>

                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-stone-500 text-lg">No posts found yet. Check back soon!</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

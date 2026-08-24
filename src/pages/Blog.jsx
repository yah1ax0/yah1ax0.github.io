import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import { parseMarkdown } from "../utils/markdown";

const posts = import.meta.glob("../posts/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
});

function Blog() {

    const blogPosts = Object.entries(posts).map(([path, content]) => {

        const { data } = parseMarkdown(content);

        const slug = path
            .split("/")
            .pop()
            .replace(".md", "");

        return {
            slug,
            ...data,
        };
    });

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-gray-100 text-gray-900">

                <section className="mx-auto max-w-5xl px-6 pb-24 pt-32 lg:px-8">

                    {/* Header */}

                    <div className="mb-14">

                        <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-widest text-gray-500 shadow-sm">
                            Writing
                        </span>

                        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                            Latest Posts
                        </h1>

                    </div>


                    {/* Posts */}

                    <div className="space-y-5">

                        {blogPosts.map((post) => (

                            <article
                                key={post.slug}
                                className="group rounded-2xl border border-gray-200 bg-gray-200 p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md sm:p-7"
                            >

                                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                                    {/* Content */}

                                    <div className="max-w-3xl">

                                        <div className="mb-3 flex items-center gap-3">

                                            <time className="text-xs font-medium uppercase tracking-wider text-gray-400">
                                                {post.date}
                                            </time>

                                            <span className="h-1 w-1 rounded-full bg-gray-300" />

                                            <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-500">
                                                Security
                                            </span>

                                        </div>


                                        <NavLink to={`/blog/${post.slug}`}>

                                            <h2 className="text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-gray-600 sm:text-2xl">
                                                {post.title}
                                            </h2>

                                        </NavLink>


                                        {post.description && (
                                            <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
                                                {post.description}
                                            </p>
                                        )}

                                    </div>


                                    {/* Arrow */}

                                    <NavLink
                                        to={`/blog/${post.slug}`}
                                        aria-label={`Read ${post.title}`}
                                    >

                                    </NavLink>

                                </div>

                            </article>

                        ))}

                    </div>

                </section>

            </main>
        </>
    );
}

export default Blog;

import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { parseMarkdown } from "../utils/markdown";

const posts = import.meta.glob("../posts/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
});

function BlogPost() {
    const { slug } = useParams();

    const postPath = `../posts/${slug}.md`;
    const rawPost = posts[postPath];

    if (!rawPost) {
        return (
            <>
                <Navbar />

                <main className="min-h-screen px-6 pt-32">
                    <h1>Post not found</h1>
                </main>
            </>
        );
    }

    const { data, content } = parseMarkdown(rawPost);

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-gray-100 text-gray-900">
                <article className="mx-auto max-w-3xl px-6 pb-24 pt-32">

                    {/* Header */}
                    <header className="mb-12">

                        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gray-500">
                            {data.date}
                        </p>

                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            {data.title}
                        </h1>

                        {data.description && (
                            <p className="mt-5 text-xl leading-8 text-gray-500">
                                {data.description}
                            </p>
                        )}

                        {data.image && (
                            <img
                                src={data.image}
                                alt={data.title}
                                className="mt-10 w-full rounded-2xl object-cover"
                            />
                        )}

                    </header>


                    {/* Article */}
                    <div className="blog-content">

                        <ReactMarkdown>
                            {content}
                        </ReactMarkdown>

                    </div>

                </article>
            </main>
        </>
    );
}

export default BlogPost;
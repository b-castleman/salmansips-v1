import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostHeader } from "@/app/_components/post-header";
import { PostBody } from "@/app/_components/post-body";
import markdownToHtml from "@/lib/markdownToHtml";
import Avatar from "@/app/_components/avatar";
import Link from "next/link";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main className="bg-white min-h-screen pb-20">
      <Alert preview={post.preview} />
      <Container>
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          {/* Main Content Column */}
          <article className="lg:col-span-8">
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
            />
            <PostBody content={content} />
          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 lg:pl-4">
            <div className="sticky top-12 space-y-10">
              {/* Expert Profile Card */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-6">Expert Verdict By</h4>
                <Avatar name={post.author.name} picture={post.author.picture} />
                <p className="mt-4 text-slate-600 text-sm leading-relaxed italic">
                  Master Sommelier of Global Hydration & Senior Vice President of Beverage Aesthetics.
                </p>
              </div>

              {/* Rating Card */}
              <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center">
                <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">Official Sip Rating</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-7xl font-black tracking-tighter">{post.rating}</span>
                  <span className="text-2xl text-slate-400 font-bold">/5</span>
                </div>
                <div className="mt-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(post.rating) ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <Link 
                href="/" 
                className="inline-flex items-center text-slate-900 font-bold hover:translate-x-[-4px] transition-transform duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to all Sips
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Salman Sips`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

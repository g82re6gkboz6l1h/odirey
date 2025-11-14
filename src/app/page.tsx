import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import Header from "@/app/_components/header";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export default function Index() {
  const allPosts = getAllPosts();

  if (!allPosts.length) {
    return null;
  }

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  const signalPosts = morePosts.slice(0, 3);
  const remainingPosts = morePosts.slice(3);
  const tagCloud = Array.from(
    new Set(allPosts.flatMap((post) => post.tags ?? []))
  ).slice(0, 12);

  const formatBriefDate = (value: string) =>
    new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
    }).format(new Date(value));

  const snapshotMetrics = [
    { label: "Runs observed", value: "2,914" },
    { label: "Escapes prevented", value: "128" },
    { label: "Playbooks shared", value: "42" },
  ];

  return (
    <main className="relative overflow-hidden pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-orb-gradient opacity-60" />
      <Header />
      <Container>
        <HeroPost
          title={heroPost.title}
          image={heroPost.image}
          slug={heroPost.slug}
          meta={heroPost.meta}
          tags={heroPost.tags}
          date={heroPost.date}
          readingMinutes={heroPost.readingMinutes}
        />

        {signalPosts.length > 0 && (
          <section id="signals" className="mt-20 animate-fade-up">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow">Signal board</span>
                <h2 className="section-title">
                  Rapid reads for the next stand-up
                </h2>
                <p className="section-subtitle">
                  Three-minute takes on automation tactics that just shipped
                  inside the lab.
                </p>
              </div>
              <div className="btn-ghost pointer-events-none opacity-40">
                Signal feed live
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {signalPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/posts/${post.slug}`}
                  className="surface-panel group flex h-full flex-col gap-4"
                >
                  <div className="flex items-center justify-between text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/50">
                    <span>Pulse {index + 1}</span>
                    {post.date && <span>{formatBriefDate(post.date)}</span>}
                  </div>
                  <h3 className="font-display text-2xl leading-snug text-white transition-colors duration-200 group-hover:text-nebula-100">
                    {post.title}
                  </h3>
                  <p className="line-clamp-4 text-sm leading-relaxed text-white/70">
                    {post.meta}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/60">
                    <span>Read memo</span>
                    {typeof post.readingMinutes === "number" && (
                      <span>{post.readingMinutes} min</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section id="systems" className="mt-24 animate-fade-up">
          <div className="grid gap-8 rounded-5xl border border-white/10 bg-white/5 p-8 shadow-aurora backdrop-blur">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <span className="eyebrow">Systems stack</span>
                <h2 className="section-title">
                  What the lab is instrumenting now
                </h2>
                <p className="section-subtitle">
                  Tags pulled from every dispatch. Tap in to see how teams wire
                  these into production workflows.
                </p>
              </div>
              <div className="grid gap-3 text-sm text-white/70 sm:grid-cols-3">
                {snapshotMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-3xl border border-white/15 bg-white/5 px-4 py-3 text-center"
                  >
                    <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/50">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-2xl font-display text-white">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {tagCloud.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  <span className="text-sm font-semibold text-white">
                    #{tag}
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-[0.4em] text-white/50">
                    Live
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {remainingPosts.length > 0 && <MoreStories posts={remainingPosts} />}
      </Container>
    </main>
  );
}

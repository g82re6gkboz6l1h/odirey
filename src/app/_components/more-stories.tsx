import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  if (!posts.length) {
    return null;
  }

  return (
    <section id="deep-dive" className="mt-24 animate-fade-up">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <span className="eyebrow">Deep field reports</span>
          <h2 className="section-title text-balance">
            Where automation experiments are breaking through
          </h2>
          <p className="section-subtitle">
            Long-form analysis, reference architectures, and playbooks from the
            QA systems lab.
          </p>
        </div>
        <div className="btn-secondary pointer-events-none opacity-40">
          Lab archive synced
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            image={post.image}
            slug={post.slug}
            meta={post.meta}
            date={post.date}
            tags={post.tags}
            readingMinutes={post.readingMinutes}
          />
        ))}
      </div>
    </section>
  );
}

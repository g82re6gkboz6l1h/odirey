import CoverImage from "@/app/_components/cover-image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  slug: string;
  meta: string;
  tags?: string[];
  date?: string;
  readingMinutes?: number;
};

export function HeroPost({
  title,
  image,
  slug,
  meta,
  tags = [],
  date,
  readingMinutes,
}: Props) {
  const highlightedTags = tags.slice(0, 3);
  const formattedDate = date
    ? new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(date))
    : null;

  const stats = [
    {
      label: "Confidence",
      value: "99.3%",
      detail: "Release readiness",
    },
    {
      label: "Cycle delta",
      value: "-42%",
      detail: "Time to signal",
    },
    {
      label: "Reading time",
      value: typeof readingMinutes === "number" ? `${readingMinutes}m` : "6m",
      detail: formattedDate ?? "Weekly",
    },
  ];

  return (
    <section id="latest" className="mt-12 animate-fade-up">
      <div className="relative overflow-hidden rounded-5xl border border-white/10 bg-gradient-to-br from-midnight-900/90 via-midnight-900/50 to-midnight-800/70 px-8 py-12 shadow-aurora md:px-12 lg:px-14">
        <div className="absolute inset-0 bg-hero-grid opacity-30" aria-hidden />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="flex flex-col justify-center gap-7">
            <div className="space-y-4">
              <span className="eyebrow text-nebula-200">
                Featured transmission
              </span>
              <h1 className="font-display text-4xl leading-tight text-balance md:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="text-base leading-relaxed text-white/70 md:text-lg">
                {meta}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link href={`/posts/${slug}`} className="btn-primary">
                Open briefing
              </Link>
              <Link
                href="#signals"
                className="inline-flex items-center text-sm font-semibold text-white/70"
              >
                Browse signal board →
              </Link>
            </div>

            {highlightedTags.length > 0 && (
              <div className="flex flex-wrap gap-2 text-xs font-medium text-white/70">
                {highlightedTags.map((tag) => (
                  <span key={tag} className="badge-tonal">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="surface-muted">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/50">
                    {item.label}
                  </p>
                  <p className="mt-2 text-2xl font-display text-white">
                    {item.value}
                  </p>
                  <p className="text-sm text-white/60">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-midnight-900/40 shadow-glow">
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-transparent to-transparent" />
            <CoverImage
              title={title}
              src={image}
              slug={slug}
              aspect="portrait"
            />
            <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  Updated
                </p>
                <p className="text-sm text-white">
                  {formattedDate ?? "This week"}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {highlightedTags.map((tag) => (
                  <span key={tag} className="badge-tonal">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

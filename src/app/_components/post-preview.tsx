import Link from "next/link";
import CoverImage from "./cover-image";

type Props = {
  title: string;
  image: string;
  slug: string;
  meta: string;
  date?: string;
  tags?: string[];
  readingMinutes?: number;
};

export function PostPreview({
  title,
  image,
  slug,
  meta,
  date,
  tags = [],
  readingMinutes,
}: Props) {
  const primaryTag = tags[0];
  const formattedDate = date
    ? new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(date))
    : null;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-5 shadow-aurora backdrop-blur">
      <div className="relative overflow-hidden rounded-3xl border border-white/10">
        <CoverImage slug={slug} title={title} src={image} aspect="square" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        {primaryTag && (
          <span className="absolute left-5 top-5 badge-tonal bg-black/40">
            {primaryTag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col pt-6">
        {formattedDate && (
          <time
            className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/50"
            dateTime={date}
          >
            {formattedDate}
          </time>
        )}

        <h3 className="mt-4 font-display text-2xl leading-snug text-white transition-colors duration-200 group-hover:text-nebula-100">
          <Link href={`/posts/${slug}`}>{title}</Link>
        </h3>

        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-white/70">
          {meta}
        </p>

        <div className="mt-8 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
          <Link
            href={`/posts/${slug}`}
            className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.3em] text-white"
          >
            Open file
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
          <span>
            {typeof readingMinutes === "number"
              ? `${readingMinutes} MIN`
              : "FIELD LOG"}
          </span>
        </div>
      </div>
    </article>
  );
}

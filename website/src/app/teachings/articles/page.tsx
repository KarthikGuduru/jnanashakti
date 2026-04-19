import Link from "next/link";
import { ArrowLeft, BookOpen, Download } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles & Writings | Jnanashakti",
  description:
    "Read Swami Chidananda's articles on spiritual philosophy, Vedanta, meditation, and the application of ancient wisdom in modern life.",
};

/* ------------------------------------------------------------------ */
/*  Data — real articles by Swami Chidananda (hosted on Google Drive)  */
/* ------------------------------------------------------------------ */

const ARTICLES = [
  {
    num: "01",
    title: "Awareness Can Deeply Change Your Life",
    excerpt:
      "One of the great statements in the Upanishads is 'Awareness is the Ultimate Truth'. Vedānta presents awareness as a principle above thought and word — studying and reflecting upon the Vedas leads us to anchor ourselves in the Witnessing Consciousness that notices everything but does not interfere.",
    category: "Vedanta",
    fileId: "13pBZuNA_V24OvdXMjrHcwfqV-SCPD_--",
    type: "pdf" as const,
  },
  {
    num: "02",
    title: "Can Bhakti Transform Us?",
    excerpt:
      "Transformation is a profound and lasting change in our consciousness. Deep-rooted factors such as fear and attachment prevent true change, even in decades of spiritual practice. Swamiji explores how bhakti can dissolve these deep-seated psychological barriers.",
    category: "Bhakti",
    fileId: "1ooAWKdw2Hpj6sO33cJXhryLXvMvqNdyU",
    type: "docx" as const,
  },
  {
    num: "03",
    title: "Is Jñāna Yoga Everybody's Cup of Tea?",
    excerpt:
      "At the heart of jñāna-yoga lies quite a bit of metaphysics. Advaita Vedānta says the division between the 'seen' and the 'seer' is false, and that space and time are an illusion. Swamiji examines who jñāna yoga is truly suited for — and how one prepares.",
    category: "Jnana Yoga",
    fileId: "1a3L_IIp7RIJOjfYDWdAry1NURwsmIjHr",
    type: "docx" as const,
  },
  {
    num: "04",
    title: "The Search for Profound and Lasting Peace",
    excerpt:
      "The Upanishads show the way to a peace not dependent on outer circumstances. Through the story of Brahmachāri Gatavyatha Chaitanya — 'one whose worries are gone' — Swamiji explores how ancient wisdom offers a timeless solution to the restlessness of the modern mind.",
    category: "Upanishads",
    fileId: "1fkfpe1xm0yTozrgdqz-mHLXyzPlv9Y2v",
    type: "docx" as const,
  },
  {
    num: "05",
    title: "Does Consciousness Exist?",
    excerpt:
      "Science has long grappled with the dichotomy of energy and matter. But what about consciousness? This article examines the age-old battle between spirit and matter, and what both modern science and ancient Vedānta say about the ultimate nature of consciousness.",
    category: "Philosophy",
    fileId: "1-gTQJFsIqaiLXO_l3uMdKb10dpuZUlTK",
    type: "docx" as const,
  },
  {
    num: "06",
    title: "The Good Old Debate: Pūrṇa versus Śūnya",
    excerpt:
      "What remains when we attain liberation, or when the separate self ceases to exist? Advaita Vedānta says the Pure Self — non-dual, all-pervasive, ever-unchanging — remains and shines in glory. Swamiji examines this profound philosophical question with clarity and depth.",
    category: "Vedanta",
    fileId: "1ZA8Ls9x8Lc_9jmfddGai9My2gFPv3F9h",
    type: "docx" as const,
  },
  {
    num: "07",
    title: "Geetā's Loving Advice: Be Committed to Duty",
    excerpt:
      "We are often unaware how much we are enslaved by likes and dislikes — rāga and dveṣa. These attachments and aversions make us do what should not be done and prevent us from doing what should be done. The Bhagavad Geetā offers a liberating way out.",
    category: "Gita",
    fileId: "1WNJdBQXKvXRrrrFDs1XUy38qjyjcIAfj",
    type: "docx" as const,
  },
  {
    num: "08",
    title: "Even a Little of This Can Save You from Big Dangers",
    excerpt:
      "Based on the Geetā verse 'svalpam api asya dharmasya trāyate mahato bhayāt' — even a little of this dharma saves one from great danger. Swamiji shows how small, consistent spiritual practices create the most profound and lasting transformation.",
    category: "Sadhana",
    fileId: "12xhY04kMtxkbSfAFuixOjNHkWeIghFgC",
    type: "docx" as const,
  },
  {
    num: "09",
    title: "Let Go and Find Peace",
    excerpt:
      "'Renounce and rejoice,' says Śrī Kṛṣṇa — these words are the very quintessence of the Bhagavad Geetā. We all know this truth, yet behave as though we do not. Swamiji unpacks the Geetā's deepest teaching on renunciation and the peace that follows.",
    category: "Gita",
    fileId: "1jmFgghg-XY2zsujuXib-9YQVZ2mtCd3f",
    type: "docx" as const,
  },
  {
    num: "10",
    title: "Looking for the Lost Jewel",
    excerpt:
      "By nature we are extrovert, looking for happiness in things outside. An Upanishad mantra says God created our sense organs to constantly seek happiness in the world of objects. But the 'lost jewel' — the source of lasting joy — has been within us all along.",
    category: "Vedanta",
    fileId: "1tSVDqlhn3YCLaqK8QQnhFKRLdDfApPnZ",
    type: "docx" as const,
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Vedanta: "bg-saffron/10 text-saffron",
  Bhakti: "bg-maroon/10 text-maroon",
  "Jnana Yoga": "bg-earth/10 text-earth",
  Upanishads: "bg-gold/10 text-gold",
  Philosophy: "bg-saffron/10 text-saffron",
  Gita: "bg-maroon/10 text-maroon",
  Sadhana: "bg-earth/10 text-earth",
};

function driveViewUrl(fileId: string) {
  return `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
}

function driveDownloadUrl(fileId: string) {
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* ---- Banner ---- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-earth via-saffron-dark to-saffron py-20 sm:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4">
          <Link
            href="/teachings"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Teachings
          </Link>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Articles &amp; Writings
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Essays and reflections by{" "}
            <span className="font-[family-name:var(--font-sanskrit)]">
              Swāmi Chidānanda
            </span>{" "}
            on Vedānta, the Bhagavad Geetā, meditation, and the practical
            application of ancient wisdom in everyday life.
          </p>
          <p className="mt-2 text-sm text-white/60">
            {ARTICLES.length} articles available
          </p>
        </div>
      </section>

      {/* ---- Articles Grid ---- */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {ARTICLES.map((article) => (
              <article
                key={article.num}
                className="group flex flex-col rounded-2xl border border-warm-border bg-surface p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Top row: number + category */}
                <div className="flex items-center justify-between gap-3">
                  <span className="font-heading text-3xl font-bold text-warm-border select-none">
                    {article.num}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold font-[family-name:var(--font-sanskrit)] ${
                      CATEGORY_COLORS[article.category] ??
                      "bg-saffron/10 text-saffron"
                    }`}
                  >
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-text-primary transition-colors group-hover:text-saffron">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Actions */}
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={driveViewUrl(article.fileId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-saffron px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-saffron-dark hover:shadow-sm"
                  >
                    <BookOpen size={13} />
                    Read Article
                  </a>
                  <a
                    href={driveDownloadUrl(article.fileId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-warm-border px-4 py-2 text-xs font-semibold text-text-muted transition-all hover:border-saffron/40 hover:text-saffron"
                  >
                    <Download size={13} />
                    Download {article.type === "pdf" ? "PDF" : "Word"}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

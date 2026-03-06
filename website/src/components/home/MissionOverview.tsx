import { Heart, BookOpen, Users } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

interface MissionCard {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const cards: MissionCard[] = [
  {
    icon: Heart,
    title: "Human Values",
    description:
      "Nurturing timeless values from ancient traditions for modern living.",
  },
  {
    icon: BookOpen,
    title: "Spiritual Education",
    description:
      "Bridging Vedantic wisdom with contemporary understanding.",
  },
  {
    icon: Users,
    title: "Empowerment",
    description:
      "Empowering individuals and organisations through inner transformation.",
  },
];

export default function MissionOverview() {
  return (
    <section className="section-padding bg-warm-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Our Mission
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-saffron" />
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            Guided by the vision of ancient seers, we work to cultivate wisdom,
            character, and purpose in every individual we reach.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group rounded-2xl bg-surface p-8 shadow-sm border border-warm-border/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-saffron/10 text-saffron transition-colors duration-300 group-hover:bg-saffron group-hover:text-white">
                <card.icon className="h-7 w-7" strokeWidth={1.8} />
              </div>

              <h3 className="mt-6 font-heading text-xl font-semibold text-text-primary">
                {card.title}
              </h3>

              <p className="mt-3 leading-relaxed text-text-muted">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

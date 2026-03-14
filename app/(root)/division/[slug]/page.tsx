import { divisions } from "@/lib/data/divisions";
import { notFound } from "next/navigation";

export default async function DivisionPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const division = divisions.find((d) => d.slug === slug);
  if (!division) return notFound();

  return (
    <main className="bg-background text-primary antialiased">

      {/* HERO */}
      <section className="relative px-6 sm:px-10 lg:px-16 pt-32 pb- overflow-hidden">

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,0,0,0.04)_0%,transparent_70%)]"
        />

        <div className="relative max-w-4xl">


            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary leading-tight mb-3">
            {division.title}
          </h1>

          {division.heroSubtitle && (
            <p className="text-lg sm:text-xl text-text-secondary mb-6 max-w-2xl leading-relaxed">
              {division.heroSubtitle}
            </p>
          )}

          <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl">
            {division.description}
          </p>

        </div>
      </section>


      {/* SERVING LOCATIONS */}
      {division.serving && (
        <section className="px-6 sm:px-10 lg:px-16 py-20 bg-muted">
          <div className="max-w-5xl">

            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-text-secondary mb-3">
              Presence
            </p>

            <h2 className="text-2xl font-medium text-primary mb-10">
              Currently serving in
            </h2>

            <div className="flex flex-wrap gap-3">
              {division.serving.map((city, i) => (
                <span
                  key={i}
                  className="px-5 py-2 rounded-full bg-card text-sm text-primary"
                >
                  {city}
                </span>
              ))}
            </div>

          </div>
        </section>
      )}


      {/* FRANCHISE MODELS */}
      {division.franchiseModels && (
        <section className="px-6 sm:px-10 lg:px-16 py-24">
          <div className="max-w-5xl">

            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-text-secondary mb-3">
              Investment
            </p>

            <h2 className="text-2xl font-medium text-primary mb-14">
              Franchise models available
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {division.franchiseModels.map((model, i) => (
                <div key={i} className="group">

                  <span className="block text-6xl font-semibold text-muted leading-none mb-4 select-none group-hover:text-text-secondary transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-lg font-medium text-primary mb-3">
                    {model.name}
                  </h3>

                  <div className="space-y-1 text-sm text-text-secondary mb-4">
                    <p>
                      <span className="text-primary font-medium">
                        Investment:
                      </span>{" "}
                      {model.investment}
                    </p>

                    <p>
                      <span className="text-primary font-medium">
                        Area:
                      </span>{" "}
                      {model.area}
                    </p>
                  </div>

                  {model.desc && (
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {model.desc}
                    </p>
                  )}

                  <div className="mt-8 h-px w-12 bg-divider group-hover:w-20 transition-all duration-300" />

                </div>
              ))}
            </div>

          </div>
        </section>
      )}


      {/* BENEFITS */}
      {division.benefits && (
        <section className="px-6 sm:px-10 lg:px-16 py-6 bg-slate-800 text-white">
          <div className="max-w-5xl">

            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-white/60 mb-3">
              Why us
            </p>

            <h2 className="text-2xl font-medium text-white mb-14">
              Why partner with {division.title}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {division.benefits.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <path
                        d="M2 5l2.5 2.5L8 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <p className="text-sm text-white/80 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}


      {/* CAREERS */}
      {division.careers && (
        <section className="px-6 sm:px-10 lg:px-16 py-24">
          <div className="max-w-5xl">

            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-text-secondary mb-3">
              Roles
            </p>

            <h2 className="text-2xl font-medium text-primary mb-12">
              Career opportunities
            </h2>

            <div className="flex flex-wrap gap-3">
              {division.careers.map((role, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-muted text-sm text-primary hover:bg-divider transition-colors cursor-default"
                >
                  {role}
                </span>
              ))}
            </div>

          </div>
        </section>
      )}


      {/* CONTACT CTA */}
      <section className="px-6 sm:px-10 lg:px-16 py-28 bg-muted">
        <div className="max-w-2xl">

          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-text-secondary mb-4">
            Get in touch
          </p>

          <h2 className="text-3xl sm:text-4xl font-medium text-primary mb-5 leading-tight">
            Interested in {division.title}?
          </h2>

          <p className="text-text-secondary text-sm sm:text-base mb-10 leading-relaxed">
            Connect with our team to explore opportunities, partnerships,
            and collaboration.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:+917900268888"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-800 text-white text-sm font-medium hover:opacity-90 transition"
            >
              Call / WhatsApp
              <span className="font-normal opacity-70">79002 68888</span>
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
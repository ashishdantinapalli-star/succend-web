export function About() {
  return (
    <section
      id="about"
      className="border-t border-line bg-transparent px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* About Succend */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
              The idea
            </p>

            <h2 className="mt-3 font-display text-[30px] font-semibold tracking-tight text-ink">
              Ambition is the beginning. Consistency is the hard part.
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-ink-soft">
              Most goals don't happen in one big moment. They happen through
              small steps repeated over time. Succend is being built to make
              those steps easier to see, track, and celebrate.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-ink-soft">
              Goals become milestones. Progress earns XP. Ranks and achievements
              give you something to work toward. The aim is to make personal
              growth feel less like an endless checklist and more like a
              journey you can actively take part in.
            </p>
          </div>

          {/* About the founder */}
          <div className="rounded-2xl border border-line bg-surface-raised p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
              Behind the project
            </p>

            <h2 className="mt-3 font-display text-[28px] font-semibold tracking-tight text-ink">
              Built by a student who likes building things.
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-ink-soft">
              I'm a student interested in engineering, technology, and turning
              ideas into things people can actually use. I started building
              Succend because I wanted to explore how software and game
              mechanics could make working toward goals more engaging.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-ink-soft">
              I'm developing Succend while learning software development,
              experimenting with product design, and figuring out what makes
              an idea useful beyond the screen. It's an ongoing project, and
              there's a lot left to build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export function Features() {
  const features = [
    {
      title: "Goal & milestone tracking",
      description: 
        "Turn ambitious goals into clear milestones and keep track of how far you've come.",  
    },
    {
      title: "XP & Leveling",
      description:
        "Earn experience as you make progress and level up as you accomplish more.",
    },

    {
      title: "Achievements",
      description:
        "Build momentum by unlocking achievements for meaninful milestones and accomplishments",
    },
    {
      title: "Streaks & progress",
      description:
        "Keep your momentum visible with streaks, progress indicators, and user stats.",
    },
    {
      title: "Challenges & Leaderboards",
      description:
        "Challenge yourself with your friends, and see how you are placing on the leaderboard.",
    },
];

return (
  <section id="features" className="border-t border-line bg-surface py-20">
    <div className="mx-auto max-w-6xl px-6">
      <div className="max-w-2x1">
        <p className="text-sm font-medium text-brand-dark"> 
          What you can do
        </p>

      <h2 className="mt-2 font-display text=[30px] font-semibold tracking-tight text-ink">
        More than a goal tracker
      </h2>

      <p className="mt-3 text=[15px] leading-relaxed text-ink-soft">
        Succend turns persoal progress into a system you can see, measure, and keep coming back to. 
      </p>
    </div>

    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <div key={feature.title} className="rounded-2xl border border-line bg-surface-raised p-6 transition-transform duration-200 hover:-translate-y-1">
          <h3 className="text=[15px] font-semibold text-ink">
            {feature.title}
          </h3>
          
          <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
            {feature.description}
          </p>
        </div>
      ))}
      </div>
    </div>
  </section>
  );
}
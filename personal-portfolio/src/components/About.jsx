function About() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight">About</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">A quick snapshot of who I am and what I do.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold">Bio</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              I’m Saravanan, a frontend developer passionate about building clean, performant interfaces with React and Tailwind.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold">Education</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
              <li>Bachelor’s degree in Computer Science (or relevant coursework)</li>
              <li>Continuous learning via online courses and projects</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold">Skills</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {['React', 'Vite', 'TailwindCSS', 'TypeScript', 'Node.js', 'REST APIs'].map((skill) => (
                <span key={skill} className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20 dark:bg-indigo-400/10 dark:text-indigo-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About



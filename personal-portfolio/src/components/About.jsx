function About() {
  const skills = {
    Languages: ["JavaScript", "HTML", "CSS", "Node.js", "Python"],
    Frameworks: ["MVC", "TailwindCSS", "ExpressJS", "Node.js"],
    Libraries: ["React JS", "Mongoose"],
    Tools: ["RestClient", "Git", "GitHub", "Firebase"],
    Database: ["NoSQL", "MySQL"],
  };

  return (
    <section id="about" className="py-16 md:py-20">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight">About</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          A quick snapshot of who I am and what I do.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {/* Bio */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold">Bio</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                I’m Saravanan, a full-stack developer specializing in the MERN
                stack. I am passionate about building scalable, high-performance
                web applications and continuously advancing my skills across
                modern frontend and backend technologies.
              </p>
            </p>
          </div>

          {/* Education */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold">Education</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
              <li>B.E Computer Science (IoT, blockchain, and cybersecurity)</li>
              <li>Minor Degree in Artificial Intelligence and Data Science</li>
              <li>Continuous learning via online courses and projects</li>
            </ul>
          </div>

          {/* Skills */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold">Skills</h3>
            <div className="mt-2 flex flex-col gap-3">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {category}
                  </h4>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20 dark:bg-indigo-400/10 dark:text-indigo-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

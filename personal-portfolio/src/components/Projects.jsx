import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
const projects = [
  {
    title: "Post Wave",
    description:
      "PostWave is a modern social media frontend built with React and CSS using CRA. Features interactive posts, likes, comments, and responsive user feeds.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "CSS", "CRA"],
    live: "https://postwaveweb.netlify.app/",
    code: "https://github.com/saravanan0072/media-post-app.git",
  },
  {
    title: "Dashboard UI",
    description:
      "A fully frontend  Admin dashboard built using React, Vite, and TailwindCSS. Includes a collapsible sidebar, responsive cards, and placeholders for charts and analytics. Designed for scalability and a clean, professional interface.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "Chart.js", "TailwindCSS", "Vite"],
    live: "https://dashboard-ui-web.netlify.app/",
    code: "https://github.com/saravanan0072/personal-portfolio/tree/portfolio/Adding-project/dashboard-ui",
  },
  {
    title: "E-commerce Store",
    description:
      "A modern, responsive e-commerce frontend built with React, Vite, and TailwindCSS. Features dynamic product grids, responsive navigation, and interactive cart functionality.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "Vite", "TailwindCSS"],
    live: "https://modern-ecommerce-web.netlify.app/",
    code: "https://github.com/saravanan0072/personal-portfolio/tree/portfolio/Adding-project/ecommerce-project/e-commerce-store",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Selected work showcasing clean UI and solid engineering.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {p.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-700 ring-1 ring-inset ring-sky-600/20 dark:bg-sky-400/10 dark:text-sky-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <a
                    href={p.live}
                    className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
                  >
                    <FaArrowUpRightFromSquare aria-hidden />
                    Live
                  </a>
                  <a
                    href={p.code}
                    className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                  >
                    <FaGithub aria-hidden />
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

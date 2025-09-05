import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa6";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium tracking-wide text-indigo-600">
              Full Stack Developer(MERN)
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Saravanan R — Full Stack Developer
            </h1>
            <p className="mt-4 max-w-prose text-slate-600 dark:text-slate-300">
              Passionate Full-Stack Developer building scalable web
              applications. Creating seamless, interactive experiences from
              frontend to backend.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-3 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                View Projects
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto h-60 w-60 rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 p-1 shadow-lg md:h-72 md:w-72">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white/90 dark:bg-slate-900/80">
                <FaCode className="text-indigo-600" size={48} aria-hidden />
              </div>
            </div>
            <div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 animate-pulse rounded-xl bg-indigo-200/40 blur-2xl"></div>
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-24 w-24 animate-pulse rounded-full bg-sky-200/40 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

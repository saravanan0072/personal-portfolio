import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaXmark, FaBriefcase } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const baseLink =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500";
  const activeLink = "text-indigo-600 dark:text-indigo-400";

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/70 backdrop-blur border-b border-slate-200/60 dark:border-slate-800">
      <nav className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
            SR
          </span>
          <span className="font-semibold tracking-tight">Saravanan R</span>
        </Link>

        {/* Toggle button for small screens */}
        <button
          aria-label="Toggle navigation menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <FaXmark aria-hidden /> : <FaBars aria-hidden />}
        </button>

        {/* Navigation menu */}
        <div
          className={`
            md:flex md:items-center md:gap-1
            ${isOpen ? "flex max-sm:flex-col gap-1" : "hidden"}
          `}
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : ""}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : ""}`
            }
          >
            Contact
          </NavLink>
          <a
            href="https://www.fiverr.com/saravanan_r_dev/buying?source=avatar_menu_profile"
            target="_blank"
            rel="noreferrer"
            className="ml-1 inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <FaBriefcase aria-hidden />
            <span>Hire Me</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

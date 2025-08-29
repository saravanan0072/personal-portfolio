import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="container flex flex-col items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} Saravanan R. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <Link className="hover:text-indigo-600" to="/">Home</Link>
          <Link className="hover:text-indigo-600" to="/about">About</Link>
          <Link className="hover:text-indigo-600" to="/projects">Projects</Link>
          <Link className="hover:text-indigo-600" to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer



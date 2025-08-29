import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiUsers,
  FiSettings,
  FiHome,
  FiMenu,
  FiBell,
  FiSun,
  FiMoon,
  FiX,
  FiUser,
} from "react-icons/fi";
import useTheme from "../hooks/useTheme";

export default function Layout({ children }) {
  const { theme, setTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-200 dark:bg-gray-900 dark:text-gray-100">
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white shadow-lg transition-transform duration-200 dark:bg-gray-800 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex h-16 items-center gap-2 px-4 border-b border-gray-100 dark:border-gray-700">
          <div className="h-8 w-8 rounded bg-blue-600"></div>
          <span className="font-semibold">Admin</span>
          <button
            className="ml-auto rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <FiX />
          </button>
        </div>
        <nav className="p-3 space-y-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 rounded px-3 py-2 text-sm font-medium transition hover:bg-gray-100 dark:hover:bg-gray-700 ${
                isActive ? "bg-gray-100 dark:bg-gray-700" : ""
              }`
            }
          >
            <FiHome /> Dashboard
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded px-3 py-2 text-sm font-medium transition hover:bg-gray-100 dark:hover:bg-gray-700 ${
                isActive ? "bg-gray-100 dark:bg-gray-700" : ""
              }`
            }
          >
            <FiUsers /> Users
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded px-3 py-2 text-sm font-medium transition hover:bg-gray-100 dark:hover:bg-gray-700 ${
                isActive ? "bg-gray-100 dark:bg-gray-700" : ""
              }`
            }
          >
            <FiSettings /> Settings
          </NavLink>
        </nav>
      </aside>

      <div className="md:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-100 bg-white/80 px-4 backdrop-blur dark:border-gray-700 dark:bg-gray-800/80">
          <div className="flex items-center gap-2">
            <button
              className="md:hidden rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setSidebarOpen((v) => !v)}
              aria-label="Open sidebar"
            >
              <FiMenu />
            </button>
            <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:inline">
              Dashboard
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Notifications"
            >
              <FiBell />
            </button>
            <button
              className={`rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                theme === "light" ? "text-blue-600" : ""
              }`}
              onClick={() => setTheme("light")}
              aria-label="Set light theme"
              title="Light"
            >
              <FiSun />
            </button>
            <button
              className={`rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                theme === "dark" ? "text-blue-400" : ""
              }`}
              onClick={() => setTheme("dark")}
              aria-label="Set dark theme"
              title="Dark"
            >
              <FiMoon />
            </button>
            <span className="ml-2 grid h-8 w-8 place-items-center rounded-full bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200">
              <FiUser />
            </span>
          </div>
        </header>

        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}

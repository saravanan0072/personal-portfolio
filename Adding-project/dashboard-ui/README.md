# Admin Dashboard (React + Vite + Tailwind v4)

A modern, responsive admin dashboard built with React, Vite, TailwindCSS v4, React Router, React Icons, and Recharts.

## Overview

- Clean, minimal UI with light/dark themes and smooth transitions
- Left sidebar navigation + top navbar with notifications and profile icon
- Dashboard with summary cards, line and bar charts, and recent activity table
- Users page with avatars, role chips, and a search filter (name/email/role)
- Settings page with editable profile, toggle switches, and add-user form (with optional photo upload)
- Fully responsive layout with a mobile sidebar (hamburger + close button)

## Tech Stack

- React (Vite) – SPA scaffolding and fast dev server
- TailwindCSS v4 – utility-first styling (using `@tailwindcss/vite` and custom dark variant)
- React Router – client-side routing (`/`, `/users`, `/settings`)
- React Icons – icons for navigation and actions
- Recharts – charts (line and bar) on the dashboard

## Key Libraries

- react, react-dom
- react-router-dom
- react-icons
- recharts
- tailwindcss, @tailwindcss/vite
- vite, @vitejs/plugin-react

## Getting Started

```bash
npm install
npm run dev
```

Open the app at the URL shown in your terminal (usually `http://localhost:5173`).

## Project Structure

```
src/
  components/
    Layout.jsx          # Sidebar + Topbar layout with theme toggle
    StatCard.jsx        # Reusable summary card
  context/
    UsersContext.jsx    # Global users store (add users from Settings)
  hooks/
    useTheme.js         # Theme state with localStorage persistence
  pages/
    Dashboard.jsx       # Summary cards, charts, recent activity
    Users.jsx           # Searchable table: name/email/role
    Settings.jsx        # Edit profile, toggles, add user, photo upload
  App.jsx               # Routes and composition under Layout
  main.jsx              # Router + Providers + app bootstrap
  index.css             # Tailwind import and custom dark variant
index.html               # No-flash theme script
```

## Theming (Light/Dark)

- Custom-only theme (ignores system preference)
- User choice persisted in `localStorage`
- No-flash: inline script in `index.html` applies `.dark` early
- Tailwind v4 dark variant is declared in `src/index.css`:

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

## Routing

- `/` – Dashboard
- `/users` – Users list with search (name, email, role)
- `/settings` – Profile form with toggles and Add User functionality

## Add User Flow

- Open Settings → fill Name, Email, Role
- Optionally upload a profile photo (stored as Data URL)
- Click Save → user is added to global context and you’re navigated to Users

## Scripts

- `npm run dev` – Start dev server
- `npm run build` – Production build
- `npm run preview` – Preview production build

## Notes

- Tailwind v4 is used via the Vite plugin (`@tailwindcss/vite`); no config file required
- Dark mode styles use `dark:` utilities and the custom variant above
- Charts are sample data with Recharts and can be replaced with real data sources

## License

MIT

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

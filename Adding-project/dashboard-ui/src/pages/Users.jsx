import { useState } from "react";
import { useUsers } from "../context/UsersContext.jsx";

export default function Users() {
  const [query, setQuery] = useState("");
  const { users } = useUsers();

  const q = query.toLowerCase();
  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q) ||
      u.role.toLowerCase().includes(q)
  );

  return (
    <section className="space-y-4">
      <header className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">Users</h2>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          placeholder="Search name, email, or role..."
          className="w-56 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none ring-0 transition placeholder:text-gray-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:focus:border-blue-700 dark:focus:ring-blue-900 lowercase"
        />
      </header>
      <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-gray-500 dark:text-gray-400">
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr
                key={u.id}
                className="border-t border-gray-100 dark:border-gray-700"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={u.avatar}
                      alt="avatar"
                      className="h-8 w-8 rounded-full"
                    />
                    <span className="font-medium">{u.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">{u.email}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                    {u.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

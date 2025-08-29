import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../context/UsersContext.jsx";
import { FiUpload } from "react-icons/fi";

export default function Settings() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [twoFA, setTwoFA] = useState(false);
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@example.com");
  const [role, setRole] = useState("Viewer");
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  const { addUser } = useUsers();

  return (
    <section className="space-y-6">
      <h2 className="text-lg font-semibold">Settings</h2>
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <article className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 lg:col-span-2">
          <header className="mb-3">
            <p className="text-sm text-gray-500 dark:text-gray-400">Profile</p>
          </header>
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              addUser({
                name: name.trim(),
                email: email.trim(),
                role: role.trim() || "Viewer",
                avatar: avatar.trim(),
              });
              navigate("/users");
            }}
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-gray-500 dark:text-gray-400">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-500 dark:text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-500 dark:text-gray-400">
                  Role
                </label>
                <select
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option>Admin</option>
                  <option>Editor</option>
                  <option>Viewer</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-500 dark:text-gray-400">
                  Profile Photo (optional)
                </label>
                <div className="flex items-center gap-3">
                  <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <FiUpload />
                    <span>Upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const reader = new FileReader();
                        reader.onload = () => {
                          if (typeof reader.result === "string")
                            setAvatar(reader.result);
                        };
                        reader.readAsDataURL(file);
                      }}
                    />
                  </label>
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="preview"
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-blue-500"
                    />
                  ) : (
                    <span className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700" />
                  )}
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-500"
            >
              Save
            </button>
          </form>
        </article>
        <aside className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <header className="mb-3">
            <p className="text-sm text-gray-500 dark:text-gray-400">Security</p>
          </header>
          <div className="space-y-3">
            <label className="flex items-center justify-between gap-2 text-sm">
              <span>Email notifications</span>
              <input
                type="checkbox"
                checked={emailNotif}
                onChange={(e) => setEmailNotif(e.target.checked)}
                className="h-4 w-7 cursor-pointer appearance-none rounded-full bg-gray-300 transition before:mr-3 before:block before:h-3 before:w-3 before:translate-x-0 before:rounded-full before:bg-white before:shadow before:content-[''] checked:bg-blue-600 checked:before:translate-x-3"
              />
            </label>
            <label className="flex items-center justify-between gap-2 text-sm">
              <span>Two-factor authentication</span>
              <input
                type="checkbox"
                checked={twoFA}
                onChange={(e) => setTwoFA(e.target.checked)}
                className="h-4 w-7 cursor-pointer appearance-none rounded-full bg-gray-300 transition before:mr-3 before:block before:h-3 before:w-3 before:translate-x-0 before:rounded-full before:bg-white before:shadow before:content-[''] checked:bg-blue-600 checked:before:translate-x-3"
              />
            </label>
          </div>
        </aside>
      </section>
    </section>
  );
}

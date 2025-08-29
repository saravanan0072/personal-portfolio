import { FiUsers, FiBell, FiShoppingCart, FiDollarSign } from "react-icons/fi";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import StatCard from "../components/StatCard.jsx";

export default function Dashboard() {
  const stats = [
    { icon: <FiUsers />, label: "Users", value: "12,345", change: "+4.2%" },
    { icon: <FiDollarSign />, label: "Revenue", value: "$98,210", change: "+2.1%" },
    { icon: <FiShoppingCart />, label: "Sales", value: "1,230", change: "-0.8%" },
    { icon: <FiBell />, label: "Orders", value: "3,421", change: "+1.4%" },
  ];

  const chartData = [
    { name: "Jan", users: 400, sales: 240 },
    { name: "Feb", users: 300, sales: 139 },
    { name: "Mar", users: 200, sales: 980 },
    { name: "Apr", users: 278, sales: 390 },
    { name: "May", users: 189, sales: 480 },
    { name: "Jun", users: 239, sales: 380 },
    { name: "Jul", users: 349, sales: 430 },
  ];

  const activity = [
    { id: 1, action: "New user registered", time: "2m ago" },
    { id: 2, action: "Order #1024 completed", time: "15m ago" },
    { id: 3, action: "Payment refunded", time: "1h ago" },
    { id: 4, action: "Profile updated", time: "3h ago" },
  ];

  return (
    <section className="space-y-6">
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <article className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 lg:col-span-3">
          <header className="mb-3">
            <p className="text-sm text-gray-500 dark:text-gray-400">User Growth</p>
          </header>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </article>
        <article className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 lg:col-span-2">
          <header className="mb-3">
            <p className="text-sm text-gray-500 dark:text-gray-400">Sales</p>
          </header>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#60a5fa" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <header className="mb-3">
          <p className="text-sm text-gray-500 dark:text-gray-400">Recent Activity</p>
        </header>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-gray-500 dark:text-gray-400">
                <th className="py-2">Event</th>
                <th className="py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {activity.map((a) => (
                <tr key={a.id} className="border-t border-gray-100 dark:border-gray-700">
                  <td className="py-2">{a.action}</td>
                  <td className="py-2 text-gray-500 dark:text-gray-400">{a.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}



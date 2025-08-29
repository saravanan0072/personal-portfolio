export default function StatCard({ icon, label, value, change }) {
  return (
    <section className="group rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400">
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
          <h3 className="text-xl font-semibold">{value}</h3>
        </div>
        <p
          className={`ml-auto text-sm ${
            String(change).startsWith("+")
              ? "text-emerald-500"
              : "text-rose-500"
          }`}
        >
          {change}
        </p>
      </div>
    </section>
  );
}

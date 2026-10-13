
type TaskStatsProps = {
  total: number;
  completed: number;
  remaining: number;
};

export default function TaskStats({
  total,
  completed,
  remaining,
}: TaskStatsProps) {
  const stats = [
    { label: "Total Tasks", value: total },
    { label: "Completed", value: completed },
    { label: "Remaining", value: remaining },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-200 bg-white p-5"
        >
          <p className="text-sm font-medium text-slate-500">
            {stat.label}
          </p>

          <p className="mt-2 text-3xl font-bold text-slate-800">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}

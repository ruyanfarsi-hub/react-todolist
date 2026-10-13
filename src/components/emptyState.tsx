
export default function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 px-6 py-10 text-center">
      <div className="mb-3 text-4xl">📝</div>

      <h3 className="text-lg font-semibold text-slate-800">
        No tasks yet
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Add your first task to get started.
      </p>
    </div>
  );
}

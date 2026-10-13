
import type { Task } from "../types/task";
import Button from "./button";

type TaskItemProps = {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TaskItem({
  task,
  onToggle,
  onDelete,
}: TaskItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label={`Mark ${task.title} as completed`}
        className="size-5 cursor-pointer accent-indigo-600"
      />

      <span
        className={`flex-1 break-words ${
          task.completed
            ? "text-slate-400 line-through"
            : "text-slate-700"
        }`}
      >
        {task.title}
      </span>

      <Button variant="danger" onClick={() => onDelete(task.id)}>
        Delete
      </Button>
    </li>
  );
}

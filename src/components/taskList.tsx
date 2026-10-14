
import type { Task } from "../types/task";
import TaskItem from "./taskItem";
import EmptyState from "./emptyState";

type TaskListProps = {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
};

export default function TaskList({
  tasks,
  onToggle,
  onDelete,
  onEdit,
}: TaskListProps) {
  if (tasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

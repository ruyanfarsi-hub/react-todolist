import type { FormEvent } from "react";
import Button from "./button";
import TextInput from "./textInput";

type TaskFormProps = {
  title: string;
  onTitleChange: (value: string) => void;
  onAddTask: () => void;
};

export default function TaskForm({
  title,
  onTitleChange,
  onAddTask,
}: TaskFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  onAddTask();
}

  return (
    <form onSubmit={handleSubmit} className="flex items-cente gap-3 h-17">
      <TextInput
        aria-label="New task"
        value={title}
        onChange={onTitleChange}
        placeholder="Add a new task..."
      />

      <Button type="submit" disabled={!title.trim()}>
        Add Task
      </Button>
    </form>
  );
}

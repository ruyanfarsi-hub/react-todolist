
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
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onAddTask();
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <TextInput
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

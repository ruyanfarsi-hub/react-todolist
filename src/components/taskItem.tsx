
import { useState } from "react";
import type { Task } from "../types/task";
import Button from "./button";

type TaskItemProps = {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number,newTitle:string) => void;
};

export default function TaskItem({
  task,
  onToggle,
  onDelete,
  onEdit,
}: TaskItemProps) {
  const [isEditing,setIsEditing] = useState(false);
  const [editTitle,setEditTitle] = useState(task.title);

  function handleSave(){
    const trimmedTitle = editTitle.trim();

    if (trimmedTitle==="") return;

    onEdit(task.id,trimmedTitle);
    setIsEditing(false);
  }

  function handleCancel(){
    setEditTitle(task.title);
    setIsEditing(false);
  }

  return (
    <li className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
      {!isEditing ? (
        <> 
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
      <button onClick={() => setIsEditing(true)}
      className="rounded-lg px-3 py-2 text-indigo-600 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      >
        Edit
      </button>

      <Button variant="danger" onClick={() => onDelete(task.id)}>
        Delete
      </Button>
      </>
      ) : (
        <>
        <input
        type="text"
        value={editTitle}
        onChange={(event) => setEditTitle(event.target.value)}
         className="min-w-0 flex-1 rounded-xl border border-slate-300 px-3 py-2 text-slate-800 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
         autoFocus
        />

        <button 
        onClick={handleSave}
        disabled={!editTitle.trim()}>
          Save
        </button>
 
        <Button variant="danger" onClick={handleCancel}>
         Cancel
        </Button>
        </>
      )}
    </li>
  
  );
}

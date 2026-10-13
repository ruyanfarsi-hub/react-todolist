 
import { useState } from "react";
import type { Task } from "./types/task";

import TaskForm from "./components/taskForm";
import TaskList from "./components/taskList";
import TaskStats from "./components/taskStats";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

  function addTask() {
    const trimmedTitle = title.trim();

    if (trimmedTitle === "") return;

    const newTask: Task = {
      id: Date.now(),
      title: trimmedTitle,
      completed: false,
    };

    setTasks((previousTasks) => [
      ...previousTasks,
      newTask,
    ]);

    setTitle("");
  }

  function toggleTask(taskId: number) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(taskId: number) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId)
    );
  }

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const remainingTasks = totalTasks - completedTasks;

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl space-y-8">
        <header>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Task Manager
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            My Tasks
          </h1>

        </header>

        <TaskStats
          total={totalTasks}
          completed={completedTasks}
          remaining={remainingTasks}
        />

        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <h2 className="mb-4 text-lg font-semibold text-slate-800 ">
            Add a Task
          </h2>

          <TaskForm
            title={title}
            onTitleChange={setTitle}
            onAddTask={addTask}
          />
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-slate-800">
              Your Tasks
            </h2>

            <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
              {totalTasks} total
            </span>
          </div>

          <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </section>
      </div>
    </main>
  );
}

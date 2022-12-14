import React, { useState, useEffect } from "react";
import axios from "axios";

export type Task = {
  id: number;
  label: React.Key | String | undefined | null;
  done: Boolean;
};

export type GetTasksResponse = {
  tasks: Task[];
};

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    axios
      .get<GetTasksResponse>("/api/tasks")
      .then((res) => {
        if (res) setTasks(res.data.tasks);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} data-testid="task">
          {task.label}
        </div>
      ))}
    </div>
  );
};

export default Tasks;

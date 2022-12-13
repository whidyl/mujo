import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Task = {
    id: number,
    label: React.Key | String | undefined | null,
    done: Boolean
}

type GetTasksResponse = {
    tasks: Task[]
};

const Tasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<GetTasksResponse>('/api/tasks');
                console.log(JSON.stringify(response));
                setTasks(response.data.tasks);
            } catch {}
            
        };
        fetchData();
    }, []);

    return (
        <div>
            {tasks.map(task => (<div key={task.id}>{task.label}</div>))}
        </div>
    );
}

export default Tasks;
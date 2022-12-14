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
            axios.get<GetTasksResponse>('/api/tasks')
            .then(res => {
                if (res) setTasks(res.data.tasks);
                
            })
            .catch(e => {
                console.log(e);
            });
        };
        fetchData();
    }, []);
    
    return (
        <div>
            {tasks.map(task => (<div key={task.id} data-testid="task">{task.label}</div>))}
        </div>
    );
}

export default Tasks;
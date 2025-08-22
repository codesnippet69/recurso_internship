import { useState } from 'react';

function ToDoApp() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if (task !== "") {
            setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
            setTask("");
        }
    };

    const removeTask = (id) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };

    const toggleComplete = (id) => {
        setTasks(
            tasks.map((t) =>
                t.id === id ? { ...t, completed: !t.completed } : t
            )
        );
    };

    return (
        <div>
            <input
                type="text"
                value={task}
                placeholder="Enter a task..."
                onChange={e => setTask(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((t) => (
                    <li key={t.id} style={{ textDecoration: t.completed ? "line-through" : "none" }}>
                        <button
                            checked={t.completed}
                            onClick={() => toggleComplete(t.id)}></button>
                        {t.text}
                        <button onClick={() => removeTask(t.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoApp;
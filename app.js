const { useState } = React;

function TodoApp() {
    const [tasks, setTasks] = useState([
        "Buy birthday gift for Mark", 
        "Submit assignment @Monday", 
        "Get the monitor repaired"
    ]);
    const [newTask, setNewTask] = useState("");
    const [theme, setTheme] = useState("light");

    const addTask = () => {
        if (newTask) {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
        setTasks(newTasks);
    };

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className={`todo-app ${theme}`}>
            <h2 id="todoAppName">Todo App</h2>
            {tasks.map((task, index) => (
                <div key={index} className="todo-item">
                    <span>{task}</span>
                    <button className="button button-minus" onClick={() => deleteTask(index)}>-</button>
                </div>
            ))}
            <div>
                <input
                    className="input-task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTask()}
                    placeholder="Add a task"
                />
            </div>
            <button className="theme-toggle" onClick={toggleTheme}>Toggle Dark Mode</button>
        </div>
    );
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));

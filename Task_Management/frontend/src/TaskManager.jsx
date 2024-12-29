import React, { useEffect, useState } from 'react';
import { FaCheck, FaPencilAlt, FaPlus, FaSearch, FaTrash } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import { CreateTask, DeleteTaskById, GetAllTasks, UpdateTaskById } from './api';
import { notify } from './utils';

function TaskManager() {
    const [input, setInput] = useState('');
    const [status, setStatus] = useState('Pending');
    const [tasks, setTasks] = useState([]);
    const [copyTasks, setCopyTasks] = useState([]);
    const [updateTask, setUpdateTask] = useState(null);

    const handleTask = () => {
        if (updateTask && input) {
            const obj = {
                taskName: input,
                isDone: updateTask.isDone,
                status: status
            };
            handleUpdateItem(obj);
        } else if (updateTask === null && input) {
            handleAddTask();
        }
        setInput('');
        setStatus('Pending');
    };

    useEffect(() => {
        if (updateTask) {
            setInput(updateTask.taskName);
            setStatus(updateTask.status);
        }
    }, [updateTask]);

    const handleAddTask = async () => {
        const taskObj = { taskName: input, isDone: false, status: status };
        const result = await CreateTask(taskObj);
        if (result.success) {
            notify(result.message, 'success');
            fetchTasks();
        } else {
            notify(result.message, 'error');
        }
    };

    const fetchTasks = async () => {
        const response = await GetAllTasks();
        console.log(response); // Log the response to check its structure
        if (response.success && Array.isArray(response.data)) {
            setTasks(response.data);
            setCopyTasks(response.data);
        } else {
            notify(response.message || 'Failed to fetch tasks', 'error');
        }
    };

    const handleDeleteTask = async (id) => {
        const response = await DeleteTaskById(id);
        if (response.success) {
            notify(response.message, 'error');
            fetchTasks();
        } else {
            notify(response.message, 'error');
        }
    };

    const handleUpdateItem = async (taskObj) => {
        const response = await UpdateTaskById(updateTask._id, taskObj);
        if (response.success) {
            notify(response.message, 'info');
            setUpdateTask(null);
            fetchTasks();
        } else {
            notify(response.message, 'error');
        }
    };

    const filterTasks = (status) => {
        const filteredTasks = copyTasks.filter(task => task.status === status);
        setTasks(filteredTasks);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="container mx-auto mt-5">
            <ToastContainer />
            <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
            <div className="mb-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border p-2 mr-2"
                    placeholder="Add a new task"
                />
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="border p-2 mr-2"
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <button onClick={handleTask} className="bg-blue-500 text-white p-2">
                    {updateTask ? 'Update Task' : 'Add Task'} <FaPlus />
                </button>
            </div>
            <div className="mb-4">
                <button onClick={() => filterTasks('Pending')} className="bg-gray-300 p-2 mr-2">Pending</button>
                <button onClick={() => filterTasks('In Progress')} className="bg-gray-300 p-2 mr-2">In Progress</button>
                <button onClick={() => filterTasks('Completed')} className="bg-gray-300 p-2">Completed</button>
            </div>
            <ul className="list-none">
                {tasks.map(task => (
                    <li key={task._id} className="flex justify-between items-center border-b py-2">
                        <span className ="flex-1">{task.taskName} - {task.status}</span>
                        <div>
                            <button onClick={() => setUpdateTask(task)} className="text-yellow-500 mr-2">
                                <FaPencilAlt />
                            </button>
                            <button onClick={() => handleDeleteTask(task._id)} className="text-red-500">
                                <FaTrash />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskManager;
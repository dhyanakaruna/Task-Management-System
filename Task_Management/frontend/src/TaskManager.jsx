import React, { useEffect, useState } from 'react';
import { FaCheck, FaPencilAlt, FaPlus, FaTrash } from 'react-icons/fa';
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
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Task Manager</h1>
            <div className="mb-4 flex justify-center">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border border-gray-300 p-2 rounded-l-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add a new task"
                />
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="border border-gray-300 p-2 rounded-md shadow-md mx-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <button onClick={handleTask} className="bg-blue-500 text-white p-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200">
                    {updateTask ? 'Update Task' : 'Add Task'} <FaPlus />
                </button>
            </div>
            <div className="mb-4 flex justify-center space-x-2">
                <button onClick={() => filterTasks('Pending')} className="bg-gray-300 p-2 rounded-md hover:bg-gray-400 transition duration-200">Pending</button>
                <button onClick={() => filterTasks('In Progress')} className="bg-gray-300 p-2 rounded-md hover:bg-gray-400 transition duration-200">In Progress</button>
                <button onClick={() => filterTasks('Completed')} className="bg-gray-300 p-2 rounded-md hover:bg-gray-400 transition duration-200">Completed</button>
            </div>
            <ul className="list-none">
                {tasks.map(task => (
                    <li key={task._id} className="flex justify-between items-center border-b py-2 hover:bg-gray-100 transition duration-200">
                        <span className={`flex-1 ${task.status === 'Completed' ? 'line-through text-gray-500' : ''}`}>{task.taskName} - {task.status}</span>
                        <div>
                            <button onClick={() => setUpdateTask(task)} className="text-yellow-500 mr-2 hover:text-yellow-600 transition duration-200">
                                <FaPencilAlt />
                            </button>
                            <button onClick={() => handleDeleteTask(task._id)} className="text-red-500 hover:text-red-600 transition duration-200">
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
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function TaskForm() {
    const [newTask, setNewTask] = useState("");
    const [description, setDescription] = useState("");

    const { crearTarea } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        crearTarea({
            title: newTask,
            description: description,
        });
        setDescription("");
        setNewTask("");
    }

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 ">
                <h1 className="text-2xl font-bold text-white mb-3">Nueva tarea</h1>
                <input type="text" placeholder="Escribe tu tarea"
                    onChange={(e) => setNewTask(e.target.value)}
                    value={newTask}
                    className="bg-slate-300 p-3 w-full mb-2"
                    autoFocus />

                <textarea placeholder="Escribe la descripción"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    className="bg-slate-300 p-3 w-full mb-2"
                >

                </textarea>
                <button
                    type="submit" className="bg-indigo-500 px-3 py-1 text-white">
                    Guardar
                </button>
            </form>
        </div>

    );
}

export default TaskForm;
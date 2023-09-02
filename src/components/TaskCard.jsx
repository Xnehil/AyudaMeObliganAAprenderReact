import { TaskContext } from '../context/TaskContext.jsx'
import { useContext } from 'react';

function TaskCard({ task }) {
    const { eliminarTarea } = useContext(TaskContext);

    return (
        <div className='bg-pink-100 p-4 rounded-md border-2 border-gray-500'>
            <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
            <p className='text-gray-500 text-sm'>{task.description}</p>

            <button className='bg-red-300 px-2 py-1 rounded-md hover:bg-red-400' onClick={() => eliminarTarea(task.id)}>
                Eliminar
            </button>
        </div>
    );
}

export default TaskCard;
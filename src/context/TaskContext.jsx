import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../tasks.js";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    let x = 20;
    const [taskList, setTaskList] = useState([]);

    function crearTarea(task) {
        const nueva = {
            title: task.title,
            description: task.description,
            id: taskList.length
        }
        console.log("nueva tarea");
        setTaskList([...taskList, nueva]);
    }

    function eliminarTarea(taskId) {
        console.log("eliminar tarea");
        setTaskList(taskList.filter((task) => task.id !== taskId));
    }

    useEffect(() => {
        setTaskList(data);
      }, [])
    

    return (
        <TaskContext.Provider value={{
            taskList,
            crearTarea,
            eliminarTarea
        }}>
            {props.children}
        </TaskContext.Provider>


    );
}


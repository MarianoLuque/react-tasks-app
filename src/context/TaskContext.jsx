import {createContext, useState, useEffect} from "react"
import {tareas} from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {

    const [tasks, setTask] = useState([])
    useEffect(() => {setTask(tareas)}, [])

    function createTask(title, descripcion){
        let idTask
        if(tasks.length == 0){
            idTask = 0
        } else{
            idTask = tasks[tasks.length - 1].id + 1
        }

        const newTask = {
          id: idTask,
          title: title,
          descripcion: descripcion
        }
        setTask([...tasks, newTask])
    }
    
    function deleteTask(id){
        const tasksRestantes = tasks.filter(task => task.id !== id)
        setTask(tasksRestantes)
        alert('Eliminando tarea ' + id)
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContext
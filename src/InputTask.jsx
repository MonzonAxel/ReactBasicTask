import { useState } from "react"
import { TaskList } from "./taskList"

export const InputTask = () => {

    const [array,setArray] = useState([])
    const [task, setTask] = useState("")

    const taskInput = (e) => {
        setTask(e.target.value)
    }

    const addTask = (e) => {
        e.preventDefault()
        if(task === "") return
        setArray([...array,task])
        setTask("")
    }

    return(
        <div>
            <form onSubmit={addTask}>
                <input type="text" placeholder="Insertar tarea" onChange={taskInput} value={task}/>
            </form>
            <button type="submit" onClick={addTask}>Agregar</button>
            <TaskList array={array} setArray={setArray}></TaskList>
        </div>
        
    )
}
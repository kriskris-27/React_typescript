import { useState } from "react"
import TaskList from "./components/TaskList"


const App = () => {
    const [tasks,setTasks]=useState([{ id: "1", title: "Learn React", completed: false },
    { id: "2", title: "Build something", completed: false },])

    const handledelete=(id:string)=>{
        setTasks((prev)=>prev.filter((task)=>(task.id !== id)))
    }
  return (
    <>
    <h3 className="font-mono text-gray-500 text-xl m-4">Task App</h3>
    <TaskList tasks={tasks} onDelete={handledelete}/>
    </>
  )
}

export default App
import { useState } from "react"
import TaskList from "./components/TaskList"
import type {Task} from "./components/TaskList"


const App = () => {
    const [tasks,setTasks]=useState([{ id: "1", title: "Learn React", completed: false },
    { id: "2", title: "Build something", completed: false }])

const handledel=(id:string)=>{
    setTasks((prev)=>prev.filter((task)=>(task.id !== id)))
}
const [input,setInput]=useState('')

const handleinput = () =>{
    if(input.trim()==='')return;
    const newtask: Task={
        id:Date.now().toString(),
        title:input,
        completed:false
    }
   setTasks((prev)=>[...prev,newtask]);
   setInput('')
}

  return (
    <>
    <div className="m-5">
        <h3>Task app</h3>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handleinput}>Add task</button>
        <TaskList tasks={tasks} onDel={handledel}/>
    </div>
    </>
  )
}

export default App
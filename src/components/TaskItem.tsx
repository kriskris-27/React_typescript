import type {Task} from "./TaskList"

interface itemprops{
    task:Task;
    onDel:(id:string)=>void
}

const TaskItem = ({task,onDel}:itemprops) => {
  return (
    <>
    <li>{task.title} <button onClick={()=>onDel(task.id)}>
        ❌</button></li>
    </>
  )
}

export default TaskItem
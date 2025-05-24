interface Task{
    id:string;
    title:string;
    completed:boolean;
}

interface inctasks{
    tasks:Task[];
    onDelete:(id:string)=>void
}

const TaskList = ({tasks,onDelete}:inctasks) => {
  return (
    <>
    <h3 className="font-mono text-red-500 text-xl m-4">Task List</h3>
    <ul>{tasks.map((task)=>(<li key={task.id} className="mx-7 my-1">{task.title}</li>))}
    <button onClick={()=>onDelete(tasks.id)}>❌</button>
    </ul>
    </>
  )
}

export default TaskList
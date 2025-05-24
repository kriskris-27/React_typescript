import TaskItem from "./TaskItem";

export interface Task{
    id:string;
    title:string;
    completed:boolean;
}

interface lisprops{
    tasks:Task[];
    onDel:(id:string)=>void

}

const TaskList = ({tasks,onDel}:lisprops) => {
  return (
    <>
    <div>TaskList</div>
    <ul>{tasks.map((task)=>(<TaskItem key={task.id} task={task} onDel={onDel}/>))}</ul>
    </>
  )
}

export default TaskList
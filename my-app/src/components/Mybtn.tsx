
import { useNavigate } from "react-router-dom"

type MybtnProps = {
    title: string,
    to:string | number
}

function Mybtn({ title , to}: MybtnProps) {
    const navigate = useNavigate()
    return <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"onClick={()=> typeof(to)==="string" ? navigate(to): navigate(to.toString())}>{title}</button>
}

export default Mybtn
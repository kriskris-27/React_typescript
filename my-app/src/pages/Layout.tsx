import { Outlet } from "react-router-dom";

const Layout=()=>{
    return (
        <div className="container p-2 ">
            <Outlet/>
        </div>
    )
}

export default Layout
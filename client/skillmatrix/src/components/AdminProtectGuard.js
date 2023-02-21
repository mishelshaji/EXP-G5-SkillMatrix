import { Navigate, Outlet } from "react-router-dom";

function AdminGuard(){
    var token = null;
    if(!token){
        return <Navigate to={'/login'}></Navigate>
    }
    return(
        <div>
            <Outlet></Outlet>
        </div>
    )
}

export default AdminGuard;
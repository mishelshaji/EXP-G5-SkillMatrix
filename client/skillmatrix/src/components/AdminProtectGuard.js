import { Navigate, Outlet } from "react-router-dom";
import { getRole } from "../service/tokenService";

function AdminGuard(){
    var token = localStorage.getItem('authToken');
    const role = getRole(token);
    if(!token || role.role !== 'Admin'){
        return <Navigate to={'/'}></Navigate>
    }
    return(
        <div>
            <Outlet></Outlet>
        </div>
    )
}

export default AdminGuard;
import jwt_decode from 'jwt-decode';
 
export let getRole = (token = null) => {
    if(token == null){
        token = localStorage.getItem('authToken');
    }
    var decoded = jwt_decode(token);
    const userdata = {}
    userdata.name = decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    userdata.role = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    userdata.id = decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']
    console.log(userdata);
    return userdata;
}
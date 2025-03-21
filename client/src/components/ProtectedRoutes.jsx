import { Navigate, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
const ProtectedRoute = () => {
    // <Navigate to="/home" />
    // if(user is  not valid){
    //     navigate("/") 
    // }else {
    //     call component
    // }
    return (

        <Outlet />
    )
    // const token = localStorage.getItem('token'); // Check for token
    // return token ? <Outlet /> : <Navigate to="/home" />;
};

export default ProtectedRoute;

import { Navigate } from "react-router-dom";

export const RutasAdmin = ({children}) => {
   const user = JSON.parse(localStorage.getItem('user')) || null
   if(!user?.admin){
    // si el usuario no esta logueado
    return <Navigate to={'/'}></Navigate>
   }else{
    return children;
   }
};
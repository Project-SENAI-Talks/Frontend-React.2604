import { AuthContext } from "@/context/authContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";


export default function PrivateRoute({ children }) {
    const { authenticated } = useContext(AuthContext);
    return authenticated ? children : <Navigate to="/login" />;
}

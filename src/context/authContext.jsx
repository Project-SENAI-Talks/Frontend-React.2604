import api from "@/services/api";

import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const token = localStorage.getItem('user');
        if (token) {
            api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }else{
            api.defaults.headers.Authorization = undefined;
        }
        setLoading(false);
    }
    , []);


    
    async function handleLogin(username, password) {
        return await api.post('/user/oauth/login', { username, password })
            .then((response) => {
                if (response.data.accessToken) {
                    setAuthenticated(true);
                    localStorage.setItem('user', JSON.stringify(response.data.accessToken));
                    window.location.href = '/home';
                }
                return response.data;
            });
    }

    function handleLogout() {
        localStorage.removeItem('user');
        setAuthenticated(false);
        api.defaults.headers.Authorization = undefined;
        window.location.href = '/login';
    }


    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8A8.009 8.009 0 0 1 12 20z" />
                </svg>
            </div>
        )
    }

    return (
        <AuthContext.Provider value={{handleLogin, authenticated, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

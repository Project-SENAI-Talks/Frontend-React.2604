import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState, useContext } from "react"

import { AuthContext } from "@/context/authContext"


export default function Login() {

    const { handleLogin } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const captionEmail = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const captionPassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    function login() {
        handleLogin(email, password)
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="mx-auto w-full h-full max-w-sm p-6 py-12 bg-white shadow-md rounded-lg">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Login</CardTitle>
                    <CardDescription>Enter your email and password to login to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="space-y-2">

                            <Label htmlFor="email">Username</Label>
                            <Input id="email" type="email" onChange={captionEmail}  required />

                        </div>
                        <div className="space-y-2">

                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" onChange={captionPassword} required />

                        </div>
                        <Button type="submit" className="w-full cursor-pointer" onClick={login} >
                            Login
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
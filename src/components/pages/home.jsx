import React, { useEffect, useState } from 'react';
import { CirclePlus, Trash, Mail, Calendar, CircleChevronRight, CircleChevronLeft, CircleUser } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableFooter } from "@/components/ui/table"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Header from "@/components/ui/header"
import api from '@/services/api';


export default function Home() {



    const [page, setPage] = useState(0);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");


    const captionEmail = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const captionAge = (e) => {
        e.preventDefault()
        setAge(e.target.value)
    }

    const captionName = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }



    const [users, setUsers] = useState({
        content: [],
        totalPages: 0,
        totalElements: 0,
        size: 0,
        number: 0,
        numberOfElements: 0,
        first: false,
        last: false,
        empty: false
    });

    useEffect(() => {

        (
            async () => {

                const response = await api.get(`/customers?page=${page}`);

                page < 0 ? setPage(0) : setPage(page)

                setUsers((prevUsers) => ({
                    ...prevUsers,
                    content: response.data
                }))
            }
        )()
    }, [page]);

    async function handleDelete(id) {

        alert("Você tem certeza que deseja deletar esse usuário?");

        await api.delete(`/customers/delete/${id}`)
            .then((response) => {
                if (response.status === 202) {

                    setUsers((prevUsers) => ({
                        ...prevUsers,
                        content: prevUsers.content.filter((user) => user.customerId !== id),
                    }));
                }
            })
    }

    async function handleCreate() {
        await api.post("/customers/register", { name, email, age })
            .then((response) => {
                if (response.status === 202) {
                    console.log("USUARIO CRIADO COM SUCESSO");
                    
                }
            })
    }

    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4">
                <div className="flex items-center justify-between w-full max-w-7xl mx-auto border-b border-black-500 pb-4">
                    <h1 className="block font-bold text-4xl colo">Usuários</h1>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button type="submit" className="cursor-pointer bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md ">
                                <CirclePlus />
                                Novo usuário
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Edit profile</SheetTitle>
                                <SheetDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </SheetDescription>
                            </SheetHeader>
                            <div className="grid gap-4 p-4 ">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Nome
                                    </Label>
                                    <Input id="name" className="col-span-3" onChange={captionName} />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username" className="text-right">
                                        E-mail
                                    </Label>
                                    <Input className="col-span-3" onChange={captionEmail} />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username" className="text-right">
                                        Idade
                                    </Label>
                                    <Input type="pageber" className="col-span-3" onChange={captionAge} />
                                </div>
                            </div>
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button onClick={handleCreate} className="cursor-pointer">Cadastrar</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>

                </div>

                <Table className={"w-full max-w-7xl mx-auto bg-white shadow-md rounded-lg"}>
                    <TableHeader className="text-lg">
                        <TableRow className="text-blue-800">
                            <TableHead> <CircleUser size={16} className="inline text-white" /> Nome</TableHead>
                            <TableHead><Mail size={16} className="inline" /> E-mail </TableHead>
                            <TableHead> <Calendar size={16} className="inline" /> Idade </TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.content.length > 1 && users.content.map((user, i) => (
                            <TableRow key={user.id}>

                                <TableCell className="p-4">{user.name}</TableCell>
                                <TableCell className="p-4">{user.email}</TableCell>
                                <TableCell className="p-4">{user.age}</TableCell>
                                <TableCell className="p-4"><Trash size={20} className='hover:text-red-500 cursor-pointer' onClick={() => handleDelete(user.customerId)} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className={"flex items-center justify-center p-4 w-full gap-9"}>
                    <CircleChevronLeft className='text-gray-600 cursor-pointer' onClick={() => setPage(page - 1)} />
                    <div className='border p-3 px-5 rounded-sm'>{page}</div>
                    <CircleChevronRight className='text-gray-600 cursor-pointer' onClick={() => setPage(page + 1)} />
                </div>
            </div >
        </>
    )
}


import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { CirclePlus, Trash, Mail, Calendar } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Header from "@/components/ui/header"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"



export default function Home() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-6">

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
                                        Name
                                    </Label>
                                    <Input id="name" value="Pedro Duarte" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username" className="text-right">
                                        Username
                                    </Label>
                                    <Input id="username" value="@peduarte" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username" className="text-right">
                                        Nascimento
                                    </Label>
                                    <Input id="username" value="@peduarte" type="number" className="col-span-3" />
                                </div>
                            </div>
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button type="submit" className="cursor-pointer">Cadastrar</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>

                </div>


                <Table className={"w-full max-w-7xl mx-auto bg-white shadow-md rounded-md"}>
                    <TableHeader className="text-lg">
                        <TableRow className="text-blue-800">
                            <TableHead className="p-4">Id</TableHead>
                            <TableHead>Nome</TableHead>
                            <TableHead><Mail size={16} className="inline" />  E-mail </TableHead>
                            <TableHead> <Calendar size={16} className="inline" /> Idade </TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="p-4">123</TableCell>
                            <TableCell className="p-4">Luiz Gustavo Gonçalves Brito</TableCell>
                            <TableCell className="p-4">luizg1717@gmail.com</TableCell>
                            <TableCell className="p-4">20</TableCell>
                            <TableCell className="p-4"><Trash size={20} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="p-4">123</TableCell>
                            <TableCell className="p-4">Luiz Gustavo Gonçalves Brito</TableCell>
                            <TableCell className="p-4">luizg1717@gmail.com</TableCell>
                            <TableCell className="p-4">20</TableCell>
                            <TableCell className="p-4"><Trash size={20} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="p-4">123</TableCell>
                            <TableCell className="p-4">Luiz Gustavo Gonçalves Brito</TableCell>
                            <TableCell className="p-4">luizg1717@gmail.com</TableCell>
                            <TableCell className="p-4">20</TableCell>
                            <TableCell className="p-4"><Trash size={20} /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>


            </div >
        </>
    )
}

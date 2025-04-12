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
import { CirclePlus, Trash2 } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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


const ids = [
    {
        id: "123",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        id: "124",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        id: "125",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        id: "126",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        id: "127",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        id: "128",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        id: "123",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]


export default function Home() {
    return (
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
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] px-6 py-4">id</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead className="text-right px-6 py-4">Apagar</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {ids.map((id) => (
                        <TableRow key={id.id}>
                            <TableCell className="font-medium px-6">{id.id}</TableCell>
                            <TableCell>{id.paymentStatus}</TableCell>
                            <TableCell>{id.paymentMethod}</TableCell>
                            <TableCell className="text-right">{id.totalAmount}</TableCell>
                            <TableCell className={"text-right flex justify-end px-6"}>
                                <Trash2 size={16} className="cursor-pointer"/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div >
    )
}

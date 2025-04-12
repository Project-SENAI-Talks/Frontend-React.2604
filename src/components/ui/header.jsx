import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DoorOpen } from 'lucide-react'

export default function Header() {
    return (
        <header className="w-full  h-16 shadow-md flex items-center justify-between px-4 bg-white absolute top-0 left-0 px-7  ">
            <Avatar className="w-9 h-9">
                <AvatarImage src="https://avatars.githubusercontent.com/u/165966404?v=4" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button className="pointer cursor-pointer bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-md">
                Sair
                <DoorOpen />
            </Button>
        </header>
    )
}
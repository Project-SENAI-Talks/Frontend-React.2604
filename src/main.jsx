import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { Button } from './components/ui/button'
import { DoorOpen } from 'lucide-react'
import './index.css'
import App from './App.jsx'

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

createRoot(document.getElementById('root')).render(
  <StrictMode>
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
    <App />
    <footer className='w-full bg-white shadow-md flex items-center justify-center absolute bottom-0 left-0'>
      <div className='text-sm text-gray-500 p-3'>
        Desenvolvido para palestra 26.04.2025 🤓
      </div>
    </footer>
  </StrictMode>
)

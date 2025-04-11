import { Button } from "@/components/ui/controler"
import { Home } from "@/components/pages/controler" 

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>Click me</Button>
      <Home />
    </div>
  )
}
 
export default App
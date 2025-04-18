import { Outlet } from "react-router-dom";
import { fetchUser } from "./api";


console.log(fetchUser());

function App() {
  return (
    <Outlet />
  )
}
 
export default App
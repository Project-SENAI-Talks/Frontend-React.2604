import { AuthContext, AuthProvider } from "./context/authContext";
import Routes from "./routes/routes";


function App() {
  return (
    <AuthProvider children={AuthContext}>
      <Routes />
    </AuthProvider>
  );
}

export default App;
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import User from "./pages/User";
import Register from "./components/Register";
import Admin from "./pages/Admin";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/User" element={<User />}>
          <Route path="Register" element={<Register />} />
        </Route>
        <Route path="/Admin" element={<Admin />}>
          <Route path="Register" element={<Register />}/>
        </Route>


      </Routes>
    </QueryClientProvider>
  )
}

export default App;

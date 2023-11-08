import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import User from "./pages/User";
import Register from "./components/Register";
import Admin from "./pages/Admin";
import  ProtectedRoute  from "./auth/ProtectedRoute";
import  UserProtectedRoute  from "./auth/UserProtectedRoute";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<Login />} />
        <Route element={<UserProtectedRoute />}>
          <Route path="/User" element={<User />}>
            <Route path="Register/:id" element={<Register />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/Admin" element={<Admin />}>
            <Route path="Register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;

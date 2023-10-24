import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import User from "./pages/User";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/User" element={<User />} />
    </Routes>
  )
}

export default App;

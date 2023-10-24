import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  )
}

export default App;

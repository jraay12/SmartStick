import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import AdminTable from "../components/AdminTable";
import userNumber from "../assets/userNumber.png";
import { useNavigate } from "react-router-dom";
import { UserDetails } from "../api/axios";
import { ToastContainer } from "react-toastify";

const Admin = () => {
  const navigate = useNavigate();
  const {data: userDetails} = UserDetails()

 
  return (
    <div>
      <div className="bg-darkBlue h-screen max-w-full absolute select-none">
        <div className="flex flex-col gap-4 max-w-full items-center">
          <Header />
          <Card label="Registered Users" number={userDetails?.Count}  className="text-6xl" image={userNumber}/>
          <AdminTable
            label="Users"
            buttonName="Add New User"
            onClick={() => navigate("/Admin/Register")}
          />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Admin;

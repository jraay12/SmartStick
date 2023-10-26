import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Table from "../components/Table";
import userNumber from "../assets/userNumber.png";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-darkBlue h-screen max-w-full absolute select-none">
        <div className="flex flex-col gap-4 max-w-full items-center">
          <Header />
          <Card label="Registered Users" number="5"  className="text-6xl" image={userNumber}/>
          <Table
            label="Users"
            buttonName="Add New User"
            onClick={() => navigate("/Admin/Register")}
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;

import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import userNumber from "../assets/userNumber.png";
import totalContacts from "../assets/totalContacts.png";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";

const User = () => {

  const navigate = useNavigate();
  
  return (
    <div className="bg-darkBlue h-screen max-w-full absolute select-none">
      <div className="flex flex-col gap-4 max-w-full items-center">
        <Header />
        <div className="flex gap-5">
          <Card label="User's Number" number="09619400079" image={userNumber} />
          <Card
            label="Total Contact's"
            number="1/3"
            className="text-6xl font-bold"
            image={totalContacts}
          />
        </div>
        <Table
          label="CONTACTS"
          buttonName="Add Contacts"
          onClick={() => navigate("/User/Register")}
        />
      </div>
    </div>
  );
};

export default User;

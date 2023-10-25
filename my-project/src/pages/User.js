import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import userNumber from "../assets/userNumber.png";
import totalContacts from "../assets/totalContacts.png"
import Table from "../components/Table";

const User = () => {
  return (
    <div className="bg-darkBlue h-screen max-w-full absolute">
      <div className="flex flex-col gap-4 max-w-full items-center">
        <Header />
        <div className="flex gap-5"> 
          <Card label="User's Number" number="09619400079" image={userNumber} />
          <Card label="Total Contact's" number="1" className="text-6xl font-bold" image={totalContacts} />
        </div>
        <Table 
        label = "CONTACTS"
        />
      </div>
    </div>
  );
};

export default User;

import React, {useContext} from "react";
import AuthContext from "../auth/Context";
import Header from "../components/Header";
import Card from "../components/Card";
import userNumber from "../assets/userNumber.png";
import totalContacts from "../assets/totalContacts.png";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";
import { GetContactDetails } from "../api/axios";


const User = () => {

  const { auth } = useContext(AuthContext);

  const navigate = useNavigate();
  
  const {data: details} = GetContactDetails(auth.userId)
 
  const total = details?.count
  const name = details?.name
  
  return (
    <div className="bg-darkBlue h-screen max-w-full absolute select-none">
      <div className="flex flex-col gap-4 max-w-full items-center">
        <Header />
        <div className="flex gap-5">
          <Card label="User's Number" number="09619400079" image={userNumber} />
          <Card
            label="Total Contact's"
            number={total}
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

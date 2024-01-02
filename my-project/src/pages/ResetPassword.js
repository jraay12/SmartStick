import React from "react";
import Input from "../components/Input";
import Button from "../components/Buttons";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const navigate = useNavigate()

    const handleCancel = () => {
        navigate("/Login")
    }
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-darkBlue">
      <div className="max-w-[400px] min-h-[350px] rounded-lg drop-shadow-2xl border-[1px] shadow-2xl bg-white">
        <div className="flex flex-col gap-10 m-4">
          <div>
          <p className="text-black text-sm mb-6">Enter your user account's verified email address and we will send you a password reset link.</p>
            <h1 className="text-4xl font-bold">Reset Password</h1>
            <hr className="mt-2 border-black" />
          </div>
          <div>
            <Input label="Please enter you email" type="email" />
          </div>
          <div className="flex justify-between gap-4">
            <Button buttonName="Send Request" className="border-[2px] p-2 bg-blue-500 text-white"/>

            <Button buttonName="Cancel " className="border-[2px] p-2 bg-red-500 text-white" onClick={handleCancel}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

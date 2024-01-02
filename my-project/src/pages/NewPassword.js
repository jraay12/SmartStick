import React from "react";
import Input from "../components/Input";
import Button from "../components/Buttons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewPassword = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-darkBlue">
      <div className="max-w-[400px] min-h-[350px] rounded-lg drop-shadow-2xl border-[1px] shadow-2xl bg-white">
        <div className="flex flex-col gap-10 m-4">
          <div className="mt-6">
            <h1 className="text-4xl font-bold">Change Password</h1>
            <hr className="mt-2 border-black" />
          </div>
          <form className="space-y-10">
            <div>
              <Input label="New Password" type="email" />
            </div>

            <div className="flex justify-between gap-4">
              <Button
                buttonName="Change password"
                className="border-[2px] p-2 bg-blue-500 text-white w-full"
              />
            </div>
          </form>
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

export default NewPassword;

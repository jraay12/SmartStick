import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Buttons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ChangePassword } from "../api/axios";

const NewPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = new URLSearchParams(location.search).get("token"); // Extract token from URL parameters
  const { mutate } = ChangePassword();
  const [data, setNewData] = useState({
    token: token,
    password: "",
    password_confirmation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(
      { value: data },
      {
        onSuccess: () => {
          toast.success("Password successfully change");
          setTimeout(() => {
            navigate("/Login");
          }, 3000);
        },
        onError: (err) => {
          if (data.password != data.password_confirmation) {
            toast.error("Password & Confirm Password not the same");
          } else {
            toast.error("Invalid Token");
          }
        },
      }
    );
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-darkBlue">
      <div className="min-w-[500px] min-h-[350px] rounded-lg drop-shadow-2xl border-[1px] shadow-2xl bg-white">
        <div className="flex flex-col gap-10 m-4">
          <div className="mt-6">
            <h1 className="text-4xl font-bold">Change Password</h1>
            <hr className="mt-2 border-black" />
          </div>
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <Input
                label="New Password"
                type="password"
                className="font-semibold"
                value={data?.password}
                onChange={(e) =>
                  setNewData({ ...data, password: e.target.value })
                }
              />
              <Input
                label="Confirm New Password"
                type="password"
                className="font-semibold"
                value={data?.confirm_password}
                onChange={(e) =>
                  setNewData({ ...data, password_confirmation: e.target.value })
                }
              />
            </div>
            <div className="flex justify-between gap-4">
              <Button
                buttonName="Change password"
                className="border-[2px] p-2 bg-blue-500 text-white w-full"
                type="submit"
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

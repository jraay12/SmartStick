import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Buttons";
import { useNavigate } from "react-router-dom";
import { ResetLink } from "../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const { mutate } = ResetLink();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    mutate(
      { value: formData },
      {
        onSuccess: (data) => {
          setSuccess(true);
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        },
        onError: (err) => {
          toast.error("Email not found");
        },
      }
    );
  };
  const handleCancel = () => {
    navigate("/Login");
  };
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-darkBlue">
      <div className="max-w-[400px] min-h-[350px] rounded-lg drop-shadow-2xl border-[1px] shadow-2xl bg-white">
        <div className="flex flex-col gap-10 m-4">
          <div>
            <h1 className="text-4xl font-bold">Reset Password</h1>
            <hr className="mt-2 border-black" />
            <p className="text-black text-sm mt-6">
              Enter your user account's verified email address and we will send
              you a password reset link.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {success ? (
              <div className="font-bold text-xl">
                Email has been sent. Please check your email. Thank you
              </div>
            ) : (
              <div>
                <Input
                  label="Please enter you email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            )}
            {success ? (
              ""
            ) : (
              <div className="flex justify-between gap-4 ">
                <Button
                  buttonName="Send Request"
                  className="border-[2px] p-2 bg-blue-500 text-white"
                />

                <Button
                  buttonName="Cancel "
                  className="border-[2px] p-2 bg-red-500 text-white"
                  onClick={handleCancel}
                />
              </div>
            )}
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

export default ResetPassword;

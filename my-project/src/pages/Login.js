import React, { useRef, useEffect, useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../components/Input";
import Buttons from "../components/Buttons";
import Logo from "../assets/smartStickLogo.png";
import { MutateLogin } from "../api/axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../auth/Context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate } = MutateLogin();

  const inputRef = useRef();
  const navigate = useNavigate();

  const { setAuth, auth } = useContext(AuthContext);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const infos = { email, password };
    mutate(infos, {
      onSuccess: (data) => {
        const access_token = data?.data?.data?.token;
        sessionStorage.setItem("access_token", access_token);
        const name = data.data?.data?.user?.name;
        const userId = data.data?.data?.user?.id;
        const role = data.data?.data?.user?.role;
        const number = data.data?.data?.user?.contact_number;
        if (data.data?.data?.user?.role === "admin") {
          navigate("/Admin");
        } else {
          navigate("/User");
        }
        setAuth({ name, userId, role, number });
      },
      onError : () => {
        toast.error("Invalid Credentials")
      }
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen h-screen min-w-max bg-darkBlue">
      <div className="flex min-w-[60%] max-w-full rounded-3xl min-h-[80%] shadow-2xl drop-shadow-2xl shadow-blue bg-blind-man bg-no-repeat bg-contain border-[1px] border-black border-opacity-20">
        <div className="w-full min-h-full rounded-l-3xl bg-background bg-no-repeat bg-cover"></div>
        <div className="flex flex-col xxl:gap-52 bg-slate-200 px-4 gap-10 justify-center items-center w-full min-h-full rounded-r-3xl ">
          <div className="">
            <img src={Logo} />
          </div>

          <form onSubmit={handleLogin}>
            <div className="flex w-[400px] xxl:w-[1000px] font-medium  flex-col gap-4">
              <Input
                ref={inputRef}
                label="Email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="w-full h-10 xxl:h-20 xxl:text-4xl rounded-lg  flex justify-center items-center font-bold bg-blue hover:bg-opacity-60 text-white text-lg xxl:mt-10 mt-2">
                <Buttons
                  buttonName="Login"
                  type="submit"
                  className="bg-blue-500 min-w-full"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />{" "}
    </div>
  );
};

export default Login;

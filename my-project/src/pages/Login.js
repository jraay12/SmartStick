import React, { useRef, useEffect } from "react";
import Input from "../components/Input";
import Buttons from "../components/Buttons";
import Logo from "../assets/smartStickLogo.png"

const Login = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen h-screen min-w-max bg-darkBlue">
      <div className="flex min-w-[60%] max-w-full rounded-3xl min-h-[80%] shadow-2xl drop-shadow-2xl shadow-blue bg-blind-man bg-no-repeat bg-contain border-[1px] border-black border-opacity-20">
        <div className="w-full min-h-full rounded-l-3xl bg-background bg-no-repeat bg-cover"></div>
        <div className="flex flex-col xxl:gap-52 bg-slate-200 px-4 gap-10 justify-center items-center w-full min-h-full rounded-r-3xl ">
          <div className="">
           <img src={Logo} />
          </div>

          <form>
            <div className="flex w-[400px] xxl:w-[1000px] font-medium  flex-col gap-4">
              <Input
                ref={inputRef}
                label="Email"
                type="email"
                placeholder="Email"
              />
              <Input label="Password" type="password" placeholder="Password" />
              <div className="w-full h-10 xxl:h-20 xxl:text-4xl rounded-lg  flex justify-center items-center font-bold bg-blue hover:bg-opacity-60 text-white text-lg xxl:mt-10 mt-2">
                <Buttons buttonName="Login" type="submit" className="bg-blue-500" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

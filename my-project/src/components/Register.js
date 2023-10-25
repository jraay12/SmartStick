import React, {useRef, useEffect } from "react";
import Input from "../components/Input";
import Buttons from "../components/Buttons";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="flex justify-center items-center absolute inset-0 backdrop-blur-sm">
      <div className="min-h-[300px] min-w-[400px]  bg-cardColor">
        <form>
          <div className="space-y-2 m-6 ">
            <Input label="Name" className="text-white" ref={inputRef}/>
            <Input label="Phone Number" className="text-white" />
            <Input label="Address" className="text-white" />
            <div className="flex justify-between pt-4">
              <div className="bg-green-600 min-w-[150px] h-10 rounded-lg">
                <Buttons buttonName="Register" className="min-w-full " />
              </div>
              <div className="bg-red-700 min-w-[150px] h-10 rounded-lg">
                <Buttons
                  buttonName="Cancel"
                  className="min-w-full"
                  onClick={() => navigate("/User")}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

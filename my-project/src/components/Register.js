import React, { useRef, useEffect, useState } from "react";
import Input from "../components/Input";
import Buttons from "../components/Buttons";
import { useNavigate, useLocation } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const inputRef = useRef();
  const location = useLocation();
  const isSpecificRoute = location.pathname === "/Admin/Register";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipcode, setZipcode] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("number", number);
    formData.append("street", street);
    formData.append("city", city);
    formData.append("province", province);
    formData.append("zipcode", zipcode);

    const values = formData;
  };

  const handleCancel = () => {
    navigate(-1);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="flex justify-center items-center absolute inset-0 backdrop-blur-sm">
      <div className="min-h-[300px] min-w-[400px] max-w-[1000px] bg-cardColor rounded-lg">
        <form onSubmit={handleRegister}>
          <div className="space-y-2 m-6 ">
            <div className="flex flex-wrap justify-evenly gap-5">
              <Input
                label="Name"
                className="text-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
                ref={inputRef}
              />
              <Input
                label="Phone Number"
                className="text-white"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              {isSpecificRoute && (
                <>
                  <Input
                    label="Password"
                    className="text-white"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    label="Email"
                    className="text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </>
              )}
              <Input
                label="Street"
                className="text-white"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
              <Input
                label="City"
                className="text-white"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Input
                label="Province"
                className="text-white"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
              />
              <Input
                label="Zipcode"
                className="text-white"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              />
            </div>
            <div className="flex justify-center pt-4 space-x-11">
              <div className="bg-green-600 min-w-[150px] h-10 rounded-lg">
                <Buttons
                  buttonName="Register"
                  className="min-w-full text-white"
                />
              </div>
              <div className="bg-red-700 min-w-[150px] h-10 rounded-lg">
                <Buttons
                  buttonName="Cancel"
                  className="min-w-full text-white"
                  onClick={handleCancel}
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

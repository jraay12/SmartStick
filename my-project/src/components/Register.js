import React, { useRef, useEffect, useState, useContext } from "react";
import Input from "../components/Input";
import Buttons from "../components/Buttons";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { MutateUserRegiter, MutateContacts } from "../api/axios";
import { useQueryClient } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const client = useQueryClient();
  let { id } = useParams();
  const inputRef = useRef();
  const location = useLocation();
  const { mutate: userRegister } = MutateUserRegiter();
  const { mutate: contactsRegister } = MutateContacts();
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
    formData.append("contact_number", number);
    formData.append("street", street);
    formData.append("city", city);
    formData.append("province", province);
    formData.append("zipcode", zipcode);

    const values = formData;

    userRegister(values, {
      onSuccess: async () => {
        toast.success("Created Successfuly");
        client.invalidateQueries(["user-details"]);
        navigate(-1);
      },
      onError: async () => {
        toast.error("Failed to Create");
      },
    });
  };

  const handleContactsRegister = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("user_id", id);
    formData.append("contact_number", number);
    formData.append("street", street);
    formData.append("city", city);
    formData.append("province", province);
    formData.append("zipcode", zipcode);

    const values = formData;

    contactsRegister(values, {
      onSuccess: () => {
        client.invalidateQueries(["details"]);
        navigate(-1);
      },
      onError: () => {
        toast.error("Limit Exceed");
      },
    });
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
        <form
          onSubmit={isSpecificRoute ? handleRegister : handleContactsRegister}
        >
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
                onChange={(e) =>
                  setNumber(e.target.value.replace(/[^0-9]/g, ""))
                }
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
                    onBlur={() => {
                      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                        email
                      );
                      if (isValidEmail) {
                        toast.dismiss();
                      } else {
                        toast.error("Invalid Email Format", {
                          autoClose: false,
                        });
                      }
                    }}
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
                  className="min-w-full text-white "
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
      <ToastContainer
        position="top-center"
        autoClose={1000}
        closeOnClick
        rtl={false}
        theme="light"
      />
    </div>
  );
};

export default Register;

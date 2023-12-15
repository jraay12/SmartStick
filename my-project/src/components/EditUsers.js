import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import Input from "./Input";
import { useNavigate, useParams } from "react-router-dom";
import { UserDetails, MutateUpdateUser } from "../api/axios";
import { useQueryClient } from "react-query";

const EditUsers = () => {
  const navigate = useNavigate();
  const client = useQueryClient();
  const { id } = useParams();
  const { mutate } = MutateUpdateUser();
  const { data } = UserDetails();

  const [value, setValue] = useState({
    name: "",
    email: "",
    contact_number: "",
    street: "",
    province: "",
    city: "",
    zipcode: "",
  });

  useEffect(() => {
    const filterData = data?.User?.find((item) => item.id == id);
    setValue({
      ...value,
      name: filterData.name,
      email: filterData.email,
      contact_number: filterData.contact_number,
      street: filterData.address.street,
      province: filterData.address.province,
      city: filterData.address.city,
      zipcode: filterData.address.zipcode,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(
      { value: value, id: id },
      { onSuccess: () => {
        client.invalidateQueries(["user-details"])
        navigate(-1)
      } }
    );
  };

  const handleCancel = () => {
    navigate("/Admin");
  };

  return (
    <div className="flex justify-center items-center absolute inset-0 backdrop-blur-sm">
      <div className="min-h-[300px] min-w-[400px] max-w-[1000px] bg-cardColor rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="space-y-2 m-6 ">
            <div className="flex flex-wrap justify-evenly gap-5">
              <Input
                label="Name"
                className="text-white"
                value={value?.name}
                onChange={(e) => setValue({ ...value, name: e.target.value })}
                // ref={inputRef}
              />
              <Input
                label="Phone Number"
                className="text-white"
                value={value?.contact_number}
                onChange={(e) =>
                  setValue({
                    ...value,
                    contact_number: e.target.value.replace(/[^0-9]/g, ""),
                  })
                }
              />
              <Input
                label="Street"
                className="text-white"
                value={value?.street}
                onChange={(e) => setValue({ ...value, street: e.target.value })}
              />
              <Input
                label="City"
                className="text-white"
                value={value?.city}
                onChange={(e) => setValue({ ...value, city: e.target.value })}
              />
              <Input
                label="Province"
                className="text-white"
                onChange={(e) =>
                  setValue({ ...value, province: e.target.value })
                }
                value={value?.province}
              />
              <Input
                label="Zipcode"
                className="text-white"
                value={value?.zipcode}
                onChange={(e) =>
                  setValue({ ...value, zipcode: e.target.value })
                }
              />
            </div>
            <div className="flex justify-center pt-4 space-x-11">
              <div className="bg-green-600 min-w-[150px] h-10 rounded-lg">
                <Buttons buttonName="EDIT" className="min-w-full text-white" />
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

export default EditUsers;

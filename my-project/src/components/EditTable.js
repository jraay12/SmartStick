import React, { useContext, useEffect, useState } from "react";
import Buttons from "./Buttons";
import Input from "./Input";
import { useNavigate, useParams } from "react-router-dom";
import { GetUserContactDetails } from "../api/axios";
import AuthContext from "../auth/Context";
import { MutateEditContacts } from "../api/axios";
import { useQueryClient } from "react-query";
const EditTable = () => {
  const navigate = useNavigate();
  const client = useQueryClient();
  const { auth } = useContext(AuthContext);
  const { id } = useParams();
  const { data } = GetUserContactDetails(auth?.userId);
  const { mutate } = MutateEditContacts();
  const [formData, setFormData] = useState({
    name: "",
    contact_number: "",
    street: "",
    province: "",
    city: "",
    zipcode: "",
  });

  useEffect(() => {
    const filter = data?.User?.find((item) => item?.id == id);

    if (filter) {
      setFormData({
        ...formData,
        name: filter?.name,
        contact_number: filter.contact_number,
        street: filter.address.street,
        province: filter.address.province,
        city: filter.address.city,
        zipcode: filter.address.zipcode,
      });
    }
  }, [data, id]);

  const handleEdit = async (e) => {
    e.preventDefault();
    mutate(
      { value: formData, id: id },
      {
        onSuccess: () => {
          client.invalidateQueries(["details"]);
          navigate(-1)
        },
      }
    );
  };

  const handleCancel = () => {
    navigate("/User");
  };
  return (
    <div className="flex justify-center items-center absolute inset-0 backdrop-blur-sm">
      <div className="min-h-[300px] min-w-[400px] max-w-[1000px] bg-cardColor rounded-lg">
        <form onSubmit={handleEdit}>
          <div className="space-y-2 m-6 ">
            <div className="flex flex-wrap justify-evenly gap-5">
              <Input
                label="Name"
                className="text-white"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                // ref={inputRef}
              />
              <Input
                label="Phone Number"
                className="text-white"
                value={formData.contact_number}
                onChange={(e) =>
                  setFormData({ 
                    ...formData,
                    contact_number: e.target.value.replace(/[^0-9]/g, ""),
                  })
                }
              />
              <Input
                label="Street"
                className="text-white"
                value={formData.street}
                onChange={(e) =>
                  setFormData({ ...formData, street: e.target.value })
                }
              />
              <Input
                label="City"
                className="text-white"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
              <Input
                label="Province"
                className="text-white"
                onChange={(e) =>
                  setFormData({ ...formData, province: e.target.value })
                }
                value={formData.province}
              />
              <Input
                label="Zipcode"
                className="text-white"
                value={formData.zipcode}
                onChange={(e) =>
                  setFormData({ ...formData, zipcode: e.target.value })
                }
              />
            </div>
            <div className="flex justify-center pt-4 space-x-11">
              <div className="bg-green-600 min-w-[150px] h-10 rounded-lg">
                <Buttons buttonName="EDIT" className="min-w-full " />
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

export default EditTable;

import React, { useContext } from "react";
import AuthContext from "../auth/Context";
import Add from "../assets/Add.png";
import Button from "./Buttons";
import Remove from "../assets/remove.png";
import Edit from "../assets/edit.png";
import View from "../assets/View.png";
import { GetContactDetails, MutateDeleteContacts } from "../api/axios";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";

const Table = (props) => {
  const { auth } = useContext(AuthContext);
  const client = useQueryClient();
  const navigate = useNavigate();
  const { data: contactDetails } = GetContactDetails(auth?.userId);
  const { mutate } = MutateDeleteContacts();
  const location = useLocation();

  const isSpecificRoute = location.pathname === "/Admin";

  const handleDeleteContacts = (id) => {
    mutate(id, {
      onSuccess: (data) => {
        console.log(data);
        client.invalidateQueries(["details"]);
      },
    });
  };

  const handleEditTable = (id) => {
    navigate(`/User/Edit/${id}`);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center px-6 h-10 bg-tableColor  rounded-md w-[1000px] text-white text-lg">
        {props.label}
        <div className="flex w-full justify-end ">
          <div className="flex items-center bg-green-600 rounded-xl w-36 z-0 ">
            <img
              src={Add}
              className="absolute object-contain h-[20px] w-[20px] mx-2 z-0"
            />
            <button
              className="select-none w-full h-full  text-sm p-2 z-10"
              onClick={props.onClick}
            >
              {props.buttonName}
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col max-h-[300px]">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-semibold">
                <thead class="border-b bg-tableHeaderColor text-white font-medium ">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Phone
                    </th>
                    <th
                      scope="col"
                      className={`${isSpecificRoute && "pl-60"} py-4 pl-40`}
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {contactDetails?.contacts?.map((items, index) => (
                    <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {items?.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {items?.address?.street}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {items.contact_number}
                      </td>

                      <td className="flex items-center justify-center gap-4 w-full py-4">
                        <div className="bg-red-500 rounded-lg hover:scale-105 transition">
                          <Button
                            image={Remove}
                            buttonName="Remove"
                            className=" p-2 min-w-[50px] font-semibold "
                            onClick={() => handleDeleteContacts(items.id)}
                          />
                        </div>

                        <div className="bg-yellow-400 rounded-lg hover:scale-105 transition">
                          <Button
                            image={Edit}
                            buttonName="Edit"
                            className="  font-semibold p-2 min-w-[50px]"
                            onClick={() => handleEditTable(items.id)}
                          />
                        </div>

                        {isSpecificRoute && (
                          <div className="bg-orange-400 rounded-lg min-w-[180px] hover:scale-105 transition">
                            <Button
                              image={View}
                              buttonName="View Contacts"
                              className="text-white  font-semibold p-2 min-w-[180px] w-[100px]  "
                            />
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Table;

import React from "react";
import Add from "../assets/Add.png";
import Button from "./Buttons";
import Remove from "../assets/remove.png";
import Edit from "../assets/edit.png";
import View from "../assets/View.png";
import { UserDetails } from "../api/axios";
import { MutateDelete } from "../api/axios";
import { useQueryClient } from "react-query";
import { Outlet } from "react-router-dom";

const Table = (props) => {
  const { data: userDetails } = UserDetails();
  const { mutate } = MutateDelete();
  const client = useQueryClient();

  const handleDelete = (value) => {
    mutate(value, {
      onSuccess: () => client.invalidateQueries(["user-details"]),
    });
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
              <table class="min-w-full text-left text-sm font-semibold ">
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
                    <th scope="col" className="py-4 pl-60">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(userDetails?.User) &&
                    userDetails?.User?.map((items, index) => (
                      <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700 font-medium ">
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
                          {items?.contact_number}
                        </td>

                        <td className="flex items-center justify-center gap-4 w-full py-4">
                          <div className="bg-red-500 rounded-lg hover:scale-105 ">
                            <Button
                              image={Remove}
                              buttonName="Remove"
                              className="text-white p-2 min-w-[50px] font-semibold "
                              onClick={() => handleDelete(items?.id)}
                            />
                          </div>
                          <div className="bg-yellow-400 rounded-lg hover:scale-105 transition">
                            <Button
                              image={Edit}
                              buttonName="Edit"
                              className="text-white  font-semibold p-2 min-w-[50px]"
                            />
                          </div>
                          <div className="bg-orange-400 rounded-lg min-w-[180px] hover:scale-105 transition">
                            <Button
                              image={View}
                              buttonName="View Contacts"
                              className="text-white  font-semibold p-2 min-w-[180px] w-[100px]  "
                            />
                          </div>
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

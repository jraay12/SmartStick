import React from "react";
import Add from "../assets/Add.png";
import sample from "../Sampledata/sample";
import Button from "./Buttons";
import Remove from "../assets/remove.png";
import Edit from "../assets/edit.png";
import { useNavigate, Outlet } from "react-router-dom";

const Table = (props) => {

  const navigate = useNavigate()

  
  return (
    <div className="flex flex-col">
      <div className="flex items-center px-6 h-10 bg-tableColor  rounded-md w-[1000px] text-white text-lg">
        {props.label}
        <div className="flex w-full justify-end ">
          <div className="flex items-center bg-green-600 rounded-xl w-36 ">
            <img src={Add} className="absolute object-contain h-[20px] w-[20px] mx-2 z-0" />
            <button className="select-none w-full h-full  text-sm p-2 z-10" onClick={() => navigate("/User/Register")}>
              Add Contact
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b bg-tableHeaderColor text-white font-medium ">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      #
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Address
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Phone
                    </th>
                    <th scope="col" class="pl-40 py-4 ">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sample.map((item) => (
                    <tr class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                      <td class="whitespace-nowrap px-6 py-4">{item.name}</td>
                      <td class="whitespace-nowrap px-6 py-4">
                        {item.Address}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">{item.Phone}</td>

                      <td class="flex items-center justify-center gap-4 w-full py-4">
                        <div className="bg-red-500 rounded-lg">
                          <Button
                            image={Remove}
                            buttonName="Remove"
                            className="text-white p-2 min-w-[50px] font-semibold"
                          />
                        </div>

                        <div className="bg-yellow-400 rounded-lg">
                          <Button
                            image={Edit}
                            buttonName="Edit"
                            className="text-black font-semibold p-2 min-w-[50px]"
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

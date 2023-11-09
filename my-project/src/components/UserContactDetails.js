import React from "react";
import { GetUserContactDetails } from "../api/axios";
import { useParams } from "react-router-dom";

const UserContactDetails = () => {
  const { id } = useParams();
  const { data } = GetUserContactDetails(id);
  const value = data?.User

  return (
    <div className="flex absolute inset-0 justify-center items-center w-screen backdrop-blur-sm">
      <div className=" min-h-[200px] min-w-[500px] border-[1px] border-black bg-tableColor rounded-lg">
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-left text-sm font-semibold text-white ">
                  <thead class="border-b font-medium  bg-tableHeaderColor ">
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
                        Contact Number
                      </th>
                    </tr>
                  </thead>
                  <tbody className="hover:text-black">
                    {Array.isArray(value) &&
                      value?.map((items, index) => (
                        <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">
                            {index + 1}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">{items?.name}</td>
                          <td class="whitespace-nowrap px-6 py-4">{items?.address?.street}</td>
                          <td class="whitespace-nowrap px-6 py-4">{items?.contact_number}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserContactDetails;

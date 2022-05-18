import React from "react";
import PageTitle from "../components/Typography/PageTitle";
import SectionTitle from "../components/Typography/SectionTitle";

const Setting = () => {
  return (
    <>
      <PageTitle>Setting</PageTitle>

      <SectionTitle>Edit Profile</SectionTitle>

      <div className="container p-6 mx-auto bg-white  dark:bg-gray-800 dark:text-gray-200 rounded-lg">
        <form>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Profile Picture
              </label>
              <div className="col-span-8 sm:col-span-4">
                <div className="w-full text-center">
                  <div
                    className="px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer"
                    role="button"
                    tabIndex="0"
                  >
                    <input
                      accept="image/*"
                      type="file"
                      autoComplete="off"
                      tabIndex="-1"
                      style={{ display: "none" }}
                    />
                    <span className="mx-auto flex justify-center">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-3xl text-green-500"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="16 16 12 12 8 16"></polyline>
                        <line x1="12" y1="12" x2="12" y2="21"></line>
                        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                        <polyline points="16 16 12 12 8 16"></polyline>
                      </svg>
                    </span>
                    <p className="text-sm mt-2">Drag your image here</p>
                    <em className="text-xs text-gray-400">
                      (Only *.jpeg and *.png images will be accepted)
                    </em>
                  </div>
                  <aside className="flex flex-row flex-wrap mt-4">
                    <img
                      className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                      src="https://i.ibb.co/WpM5yZZ/9.png"
                      alt="product"
                    />
                  </aside>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Name
              </label>
              <div className="col-span-8 sm:col-span-4">
                <input
                  className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value=""
                />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Email
              </label>
              <div className="col-span-8 sm:col-span-4">
                <input
                  className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value=""
                />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Contact Number
              </label>
              <div className="col-span-8 sm:col-span-4">
                <input
                  className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  type="text"
                  name="phone"
                  placeholder="Contact Number"
                  value=""
                />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Your Role
              </label>
              <div className="col-span-8 sm:col-span-4">
                <select
                  className="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  name="role"
                >
                  <option value="" hidden="">
                    Staff role
                  </option>
                  <option value="Admin">Admin</option>
                  <option value="CEO">CEO</option>
                  <option value="Manager">Manager</option>
                  <option value="Accountant">Accountant</option>
                  <option value="Driver"> Driver </option>
                  <option value="Security Guard">Security Guard</option>
                  <option value="Deliver Person">Delivery Person</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse pr-6 pb-6">
            <button
              className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 h-12 px-6"
              type="submit"
            >
              {" "}
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Setting;

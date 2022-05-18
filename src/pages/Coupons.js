import {
  Button,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableRow,
} from "@windmill/react-ui";
import React, { useEffect, useState } from "react";
import PageTitle from "../components/Typography/PageTitle";
import SectionTitle from "../components/Typography/SectionTitle";
import { EditIcon, TrashIcon } from "../icons";
import couponData from "../utils/demo/coupon";

function Coupons() {
  // setup pages
  const [coupons, setCoupons] = useState([]);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = couponData.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // coupon name search
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const searchData = event.target.value;
      const nameFilter = couponData.filter((coupon) => {
        return (
          coupon.code.toLowerCase().indexOf(searchData.toLowerCase()) !== -1
        );
      });
      setCoupons(
        nameFilter.slice((page - 1) * resultsPerPage, page * resultsPerPage)
      );
    }
  };

  // handle modal
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    setCoupons(
      couponData.slice((page - 1) * resultsPerPage, page * resultsPerPage)
    );
  }, [page]);

  return (
    <>
      <PageTitle>Coupons</PageTitle>

      <SectionTitle>Coupon list</SectionTitle>

      <div className="rounded-lg ring-1 ring-black ring-opacity-4 overflow-hidden bg-white dark:bg-gray-800 min-w-0 shadow-xs  mb-5">
        <div className="p-4">
          <form className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <input
                className=" px-3 py-1 dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                type="search"
                onKeyPress={handleKeyPress}
                placeholder="Search by coupons code/name"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-1"
              ></button>
            </div>

            <div className="w-full md:w-56 lg:w-56 xl:w-56">
              <button
                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 text-sm text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-full rounded-md h-12"
                type="button"
                onClick={openModal}
              >
                <span className="mr-3">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </span>
                Add Coupons
              </button>
            </div>
          </form>
        </div>
      </div>

      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>ID</TableCell>
              <TableCell>START DATE</TableCell>
              <TableCell>END DATE</TableCell>
              <TableCell>CAMPAIGNS NAME</TableCell>
              <TableCell>CODE</TableCell>
              <TableCell>PERCENTAGE</TableCell>
              <TableCell>PRODUCT TYPE</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>Actions</TableCell>
            </tr>
          </TableHeader>

          <TableBody>
            {coupons.map((coupon, i) => (
              <TableRow key={i}>
                <TableCell>
                  <span className="text-sm">{coupon.id}</span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">{coupon.startDate}</span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">{coupon.endDate}</span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">{coupon.campaignsName}</span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">{coupon.code}</span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">{coupon.percentage}</span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">{coupon.productType}</span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-red-500 bg-red-100 dark:text-red-100 dark:bg-red-800">
                      {coupon.status}
                    </span>
                  </span>
                </TableCell>

                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button layout="link" size="icon" aria-label="Edit">
                      <EditIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                    <Button layout="link" size="icon" aria-label="Delete">
                      <TrashIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChange}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>

      {/* product create modal */}
      <div
        className="w-full md:w-7/12 lg:w-6/12 xl:w-6/12 h-full dark:bg-gray-700 dark:text-gray-200 ring-1 ring-black ring-opacity-4 overflow-hidden bg-white fixed right-0 top-0 z-40 transition duration-500 ease-in-out"
        style={{ transform: `translate(${!modal ? "100" : "0"}%)` }}
      >
        <button
          className="absolute focus:outline-none z-50 text-red-500 hover:bg-red-100 hover:text-gray-700 transition-colors duration-150 bg-white shadow-md mr-6 mt-6 right-0 left-auto w-10 h-10 rounded-full block text-center"
          type="button"
          onClick={closeModal}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
          <div>
            <h4 className="text-xl font-medium">Add Coupon</h4>
            <p className="mb-0 text-sm">
              Add your coupon and necessary information from here
            </p>
          </div>
        </div>

        <form className="block">
          <div className="px-6 pt-8 h-full flex-grow w-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label className="block text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Coupon Banner Image
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
                </div>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label className="block text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Campaign Name
              </label>
              <div className="col-span-8 sm:col-span-4">
                <input
                  className="px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  type="text"
                  name="title"
                  placeholder="Campaign Name"
                />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Campaign Code
              </label>
              <div className="col-span-8 sm:col-span-4">
                <input
                  className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  type="text"
                  name="slug"
                  placeholder="Campaign Code"
                />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Coupon Validity Time
              </label>
              <div className="col-span-8 sm:col-span-4">
                <input
                  className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  type="datetime-local"
                  name="slug"
                />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Discount Percentage
              </label>
              <div className="col-span-8 sm:col-span-4">
                <input
                  className="px-3 py-1 dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  type="text"
                  name="slug"
                  placeholder="Discount Percentage"
                />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                Minimum Amount
              </label>
              <div className="col-span-8 sm:col-span-4">
                <input
                  className="px-3 py-1 dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  type="text"
                  name="slug"
                  placeholder="Minimum Amount required"
                />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Product Type
              </label>
              <div className="col-span-8 sm:col-span-4">
                <select
                  className="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  name="type"
                >
                  <option value="" hidden="">
                    Select type
                  </option>
                  <option value="Grocery">Grocery</option>
                  <option value="Foods">Foods</option>
                  <option value="Cloths">Cloths</option>
                  <option value="Health Care">Health Care </option>
                  <option value="Medicine">Medicine </option>
                  <option value="Books">Books </option>
                  <option value="Bags">Bags</option>
                  <option value="Sports &amp; Fitness">
                    Sports &amp; Fitness{" "}
                  </option>
                  <option value="Home Accessories">Home Accessories</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Electronics">Electronics </option>
                </select>
              </div>
            </div>
          </div>

          <div className="fixed bottom-0 w-full right-0 py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex bg-gray-50 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <button
                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-gray-600 border-gray-200 border dark:text-gray-500 focus:outline-none rounded-lg border border-gray-200 px-4 w-full mr-3 flex items-center justify-center cursor-pointer bg-gray-200 h-12 bg-white w-full text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-700"
                type="button"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <button
                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-full h-12"
                type="submit"
              >
                {" "}
                <span>Add Coupon</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Coupons;

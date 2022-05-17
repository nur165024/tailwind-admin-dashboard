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

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = couponData.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  useEffect(() => {
    setCoupons(
      couponData.slice((page - 1) * resultsPerPage, page * resultsPerPage)
    );
  }, [page]);

  return (
    <>
      <PageTitle>Coupons</PageTitle>

      <SectionTitle>Coupon list</SectionTitle>

      <div className="min-w-0 rounded-lg ring-1 ring-black ring-opacity-4 overflow-hidden bg-white dark:bg-gray-800 min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <div className="p-4">
          <form className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <input
                className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                type="search"
                name="search"
                placeholder="Search by coupons code/name"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-1"
              ></button>
            </div>

            <div className="w-full md:w-56 lg:w-56 xl:w-56">
              <button
                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-full rounded-md h-12"
                type="button"
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
    </>
  );
}

export default Coupons;

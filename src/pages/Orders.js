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
import { DetailsIcon, DownloadIcon } from "../icons";
import orderData from "../utils/demo/orders";

function Orders() {
  // setup pages
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = orderData.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // category name search
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const searchData = event.target.value;
      const nameFilter = orderData.filter((order) => {
        return (
          order.contact.toLowerCase().indexOf(searchData.toLowerCase()) !== -1
        );
      });
      setOrders(
        nameFilter.slice((page - 1) * resultsPerPage, page * resultsPerPage)
      );
    }
  };

  // category search
  const handleCategorySearch = (event) => {
    const searchData = event.target.value;

    if (searchData === "") {
      setOrders(
        orderData.slice((page - 1) * resultsPerPage, page * resultsPerPage)
      );
    } else {
      const statusFilter = orderData.filter((order) => {
        return order.status.toLowerCase() === searchData.toLowerCase();
      });

      setOrders(
        statusFilter.slice((page - 1) * resultsPerPage, page * resultsPerPage)
      );
    }
  };

  useEffect(() => {
    setOrders(
      orderData.slice((page - 1) * resultsPerPage, page * resultsPerPage)
    );
  }, [page]);

  return (
    <>
      <PageTitle>Orders</PageTitle>

      <SectionTitle>Order List</SectionTitle>

      <div className=" rounded-lg ring-1 ring-black ring-opacity-4 overflow-hidden bg-white dark:bg-gray-800 min-w-0 shadow-xs mb-5">
        <div className="p-4">
          <form className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <input
                className=" px-3 py-1 dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                type="search"
                placeholder="Search by phone number"
                onKeyPress={handleKeyPress}
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-1"
              ></button>
            </div>

            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <select
                className="px-2 py-1 dark:text-gray-300 rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                onChange={handleCategorySearch}
              >
                <option value="" hidden="">
                  Status
                </option>
                <option value="Delivered">Delivered</option>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Cancel">Cancel</option>
              </select>
            </div>

            <div className="w-full md:w-56 lg:w-56 xl:w-56">
              <button
                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-full rounded-md h-12"
                type="button"
              >
                <span>Download All orders</span>
                <span className="mr-3 ml-2">
                  <DownloadIcon />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>SR NO</TableCell>
              <TableCell>TIME</TableCell>
              <TableCell>SHIPPING ADDRESS</TableCell>
              <TableCell>PHONE</TableCell>
              <TableCell>METHOD</TableCell>
              <TableCell>AMOUNT</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>ACTIONS</TableCell>
              <TableCell>INVOICE</TableCell>
            </tr>
          </TableHeader>

          <TableBody>
            {orders.map((order, i) => (
              <TableRow key={i}>
                <TableCell>
                  <span className="text-sm">{i + 1}</span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">
                    {order.address.substring(0, 30)}
                  </span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">{order.contact}</span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">{order.paymentMethod}</span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">$ {order.total}</span>
                </TableCell>

                <TableCell>
                  {order.status === "Delivered" ? (
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-100">
                      {order.status}
                    </span>
                  ) : order.status === "Pending" ? (
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-yellow-500 bg-yellow-100 dark:text-white dark:bg-yellow-600">
                      {order.status}
                    </span>
                  ) : order.status === "Processing" ? (
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-blue-500 bg-blue-100 dark:text-white dark:bg-blue-800">
                      {order.status}
                    </span>
                  ) : (
                    <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-red-500 bg-red-100 dark:text-white dark:bg-red-800">
                      {order.status}
                    </span>
                  )}
                </TableCell>

                <TableCell>
                  <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                    <select className="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-8 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white">
                      <option value="All" hidden="">
                        Status
                      </option>
                      <option value="Delivered">Delivered</option>
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Cancel">Cancel</option>
                    </select>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button layout="link" size="icon" aria-label="Delete">
                      <DetailsIcon className="w-5 h-5" aria-hidden="true" />
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
            label="Products list"
          />
        </TableFooter>
      </TableContainer>
    </>
  );
}

export default Orders;

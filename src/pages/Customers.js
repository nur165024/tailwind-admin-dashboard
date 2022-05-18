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
import { EditIcon, TrashIcon } from "../icons";
import customerData from "../utils/demo/tableData";

function Customers() {
  // setup pages
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(1);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = customerData.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // curspmer name search
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const searchData = event.target.value;
      const nameFilter = customerData.filter((customer) => {
        return (
          customer.name.toLowerCase().indexOf(searchData.toLowerCase()) !== -1
        );
      });
      setCustomers(
        nameFilter.slice((page - 1) * resultsPerPage, page * resultsPerPage)
      );
    }
  };

  useEffect(() => {
    setCustomers(
      customerData.slice((page - 1) * resultsPerPage, page * resultsPerPage)
    );
  }, [page]);

  return (
    <>
      <PageTitle>Customers</PageTitle>

      <div
        className="rounded-lg ring-1 ring-black ring-opacity-4 overflow-hidden bg-white 
      min-w-0 shadow-xs  dark:bg-gray-800 mb-5"
      >
        <div className="p-4">
          <form className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <input
                className=" px-3 py-1 dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                type="search"
                placeholder="Search by customers name"
                onKeyPress={handleKeyPress}
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-1"
              ></button>
            </div>
          </form>
        </div>
      </div>

      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>ID</TableCell>
              <TableCell>JOINING DATE</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>PHONE</TableCell>
              <TableCell>ACTIONS</TableCell>
            </tr>
          </TableHeader>

          <TableBody>
            {customers.map((customer, i) => (
              <TableRow key={i}>
                <TableCell>
                  <span className="text-sm">{i + 1}</span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">
                    {new Date(customer.date).toLocaleDateString()}
                  </span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">{customer.name}</span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">
                    nur{Math.round(Math.random() * 500)}@gamil.com
                  </span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">{customer.phone}</span>
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
            label="Products list"
          />
        </TableFooter>
      </TableContainer>
    </>
  );
}

export default Customers;

import {
  Avatar,
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
import categoryData from "../utils/demo/category";

function Cards() {
  // setup pages
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = categoryData.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  useEffect(() => {
    setCategories(
      categoryData.slice((page - 1) * resultsPerPage, page * resultsPerPage)
    );
  }, [page]);

  return (
    <>
      <PageTitle>Category</PageTitle>

      <SectionTitle>Category List</SectionTitle>

      <div className="min-w-0 rounded-lg ring-1 ring-black ring-opacity-4 overflow-hidden bg-white dark:bg-gray-800 min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <div className="p-4">
          <form class="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
            <div class="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <input
                class="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                type="search"
                name="search"
                placeholder="Search by Category name"
              />
              <button
                type="submit"
                class="absolute right-0 top-0 mt-5 mr-1"
              ></button>
            </div>

            <div class="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <select class="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white">
                <option value="All" hidden="">
                  Category
                </option>
                <option value="Fish &amp; Meat">Fish &amp; Meat</option>
                <option value="Fruits &amp; Vegetable">
                  Fruits &amp; Vegetable
                </option>
                <option value="Fresh Seafood">Fresh Seafood</option>
                <option value="Cooking Essentials">Cooking Essentials</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Drinks">Drinks</option>
                <option value="Milk &amp; Dairy">Milk &amp; Dairy</option>
                <option value="Organic Food">Organic Food</option>
                <option value="Honey">Honey</option>
                <option value="Sauces &amp; Pickles">
                  Sauces &amp; Pickles
                </option>
                <option value="Jam &amp; Jelly">Jam &amp; Jelly</option>
                <option value="Snacks &amp; Instant">
                  Snacks &amp; Instant
                </option>
                <option value="Biscuits &amp; Cakes">
                  Biscuits &amp; Cakes
                </option>
                <option value="Household Tools">Household Tools</option>
                <option value="Baby Care">Baby Care</option>
                <option value="Pet Care">Pet Care</option>
                <option value="Beauty &amp; Health">Beauty &amp; Health</option>
                <option value="Sports &amp; Fitness">
                  Sports &amp; Fitness
                </option>
              </select>
            </div>

            <div class="w-full md:w-56 lg:w-56 xl:w-56">
              <button
                class="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-full rounded-md h-12"
                type="button"
              >
                <span class="mr-3">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </span>
                Add Category
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
              <TableCell>ICON</TableCell>
              <TableCell>PARENT</TableCell>
              <TableCell>CHILDREN</TableCell>
              <TableCell>TYPE</TableCell>
              <TableCell>ACTIONS</TableCell>
            </tr>
          </TableHeader>

          <TableBody>
            {categories.map((category, i) => (
              <TableRow key={i}>
                <TableCell>
                  <span className="text-sm">{category.id}</span>
                </TableCell>

                <TableCell>
                  <Avatar size="large" src={category.icon} alt="Judith" />
                </TableCell>

                <TableCell>
                  <span className="text-sm">{category.parent}</span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">{category.children}</span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">{category.type}</span>
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

export default Cards;

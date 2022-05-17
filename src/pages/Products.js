import {
  Avatar,
  Badge,
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
import { Link } from "react-router-dom";
import PageTitle from "../components/Typography/PageTitle";
import SectionTitle from "../components/Typography/SectionTitle";
import { DetailsIcon, EditIcon, TrashIcon } from "../icons";
import productData from "../utils/demo/products";

function Products() {
  // setup pages
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = productData.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // handle modal
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    setProducts(
      productData.slice((page - 1) * resultsPerPage, page * resultsPerPage)
    );
  }, [page]);

  return (
    <>
      <PageTitle>Products</PageTitle>

      <SectionTitle>Product List</SectionTitle>

      <div className="min-w-0 rounded-lg ring-1 ring-black ring-opacity-4 overflow-hidden bg-white dark:bg-gray-800 min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <div className="p-4">
          <form className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <input
                className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                type="search"
                name="search"
                placeholder="Search by product name"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-1"
              ></button>
            </div>

            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <select className="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white">
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

            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <select className="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white">
                <option value="All" hidden="">
                  Price
                </option>
                <option value="Low">Low to High</option>
                <option value="High">High to Low</option>
              </select>
            </div>

            <div className="w-full md:w-56 lg:w-56 xl:w-56">
              <button
                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-full rounded-md h-12"
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
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="min-w-0 rounded-lg ring-1 ring-black ring-opacity-4 overflow-hidden bg-white dark:bg-gray-800 min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <div className="p-4">
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-3">
            <div className="col-span-2">
              <input
                type="file"
                accept="text/csv, .csv, application/vnd.ms-excel"
                style={{ display: "none" }}
              />

              <div className="items-center border-dashed border rounded-md border-green-600 flex flex-col h-12 justify-center py-0 px-1 cursor-pointer">
                <span className="text-sm text-gray-500">Drop CSV file</span>
              </div>
            </div>

            <div className="flex items-center">
              <button
                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-gray-600 border-gray-200 border dark:text-gray-500 focus:outline-none rounded-lg border border-gray-200 px-4 w-full mr-3 flex items-center justify-center cursor-pointer bg-gray-200 h-12"
                type="button"
              >
                Upload
              </button>
              <div className="w-full">
                <a>
                  <button
                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-full h-12"
                    type="button"
                  >
                    Download
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>PRODUCT NAME</TableCell>
              <TableCell>CATEGORY</TableCell>
              <TableCell>PRICE</TableCell>
              <TableCell>STOCK</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>DETAILS</TableCell>
              <TableCell>DATE</TableCell>
              <TableCell>ACTIONS</TableCell>
            </tr>
          </TableHeader>

          <TableBody>
            {products.map((product, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar size="large" src={product.image} alt="Judith" />
                    <span className="text-sm">{product.title}</span>
                  </div>
                </TableCell>

                <TableCell>
                  <span className="text-sm">{product.parent}</span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">$ {product.price}</span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">{product.quantity}</span>
                </TableCell>

                <TableCell>
                  <Badge type={product.status}>Selling</Badge>
                </TableCell>

                <TableCell>
                  <Link to="" className="text-sm">
                    <DetailsIcon />
                  </Link>
                </TableCell>

                <TableCell>
                  <span className="text-sm">
                    {new Date(product.updatedAt).toLocaleDateString()}
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
            label="Products list"
          />
        </TableFooter>
      </TableContainer>

      {/* product create modal */}
      <div
        className="w-full md:w-7/12 lg:w-6/12 xl:w-6/12 h-full dark:bg-gray-700 dark:text-gray-200 ring-1 ring-black ring-opacity-4 overflow-hidden bg-white fixed right-0 top-0 z-40 transition duration-500 ease-in-out"
        style={{ transform: `translate(${!modal ? "100" : "0"}%)` }}
      >
        <button
          class="absolute focus:outline-none z-50 text-red-500 hover:bg-red-100 hover:text-gray-700 transition-colors duration-150 bg-white shadow-md mr-6 mt-6 right-0 left-auto w-10 h-10 rounded-full block text-center"
          type="button"
          onClick={closeModal}
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="mx-auto"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
          <div>
            <h4 class="text-xl font-medium">Add Product</h4>
            <p class="mb-0 text-sm">
              Add your product and necessary information from here
            </p>
          </div>
        </div>

        <form class="block">
          <div
            className="px-6 pt-8 flex-grow w-full pb-40 md:pb-32 lg:pb-32 xl:pb-32 overflow-y-scroll"
            style={{ height: 850 }}
          >
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label class="block text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Product Image
              </label>
              <div class="col-span-8 sm:col-span-4">
                <div class="w-full text-center">
                  <div
                    class="px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer"
                    role="button"
                    tabindex="0"
                  >
                    <input
                      accept="image/*"
                      type="file"
                      autocomplete="off"
                      tabindex="-1"
                      style={{ display: "none" }}
                    />
                    <span class="mx-auto flex justify-center">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="text-3xl text-green-500"
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
                    <p class="text-sm mt-2">Drag your image here</p>
                    <em class="text-xs text-gray-400">
                      (Only *.jpeg and *.png images will be accepted)
                    </em>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label class="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                Product SKU
              </label>
              <div class="col-span-8 sm:col-span-4">
                <input
                  class="px-3 py-1 focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm block w-full bg-gray-100 border-transparent focus:bg-white"
                  type="text"
                  name="sku"
                  placeholder="Product SKU"
                />
              </div>
            </div>

            <div class="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label class="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Product Title/Name
              </label>
              <div class="col-span-8 sm:col-span-4">
                <input
                  class="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  type="text"
                  name="title"
                  placeholder="Product title"
                />
              </div>
            </div>

            <div class="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label class="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Product Slug
              </label>
              <div class="col-span-8 sm:col-span-4">
                <input
                  class="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  type="text"
                  name="slug"
                  placeholder="Product slug"
                />
              </div>
            </div>

            <div class="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label class="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Product Description
              </label>
              <div class="col-span-8 sm:col-span-4">
                <textarea
                  class="block w-full text-sm dark:text-gray-300 rounded-md focus:outline-none form-textarea focus:border-purple-400 border-gray-300 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700 dark:focus:ring-gray-300 focus:ring focus:ring-purple-300 border text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                  name="description"
                  placeholder="Product details"
                  rows="4"
                  spellcheck="false"
                ></textarea>
              </div>
            </div>

            <div class="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label class="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Parent Category
              </label>
              <div class="col-span-8 sm:col-span-4">
                <select
                  class="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  name="parent"
                >
                  <option value="" hidden="">
                    Select parent category
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
                  <option value="Beauty &amp; Health">
                    Beauty &amp; Health
                  </option>
                  <option value="Sports &amp; Fitness">
                    Sports &amp; Fitness
                  </option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label class="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Child Category
              </label>
              <div class="col-span-8 sm:col-span-4">
                <select
                  class="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  name="children"
                >
                  <option value="" hidden="">
                    Select child category
                  </option>
                  <option value="Fish">Fish</option>
                  <option value="Meat">Meat</option>
                  <option value="Dry Fruits">Dry Fruits</option>
                  <option value="Fresh Fruits">Fresh Fruits</option>
                  <option value="Fresh Vegetable">Fresh Vegetable</option>
                  <option value="Fresh Seafood">Fresh Seafood</option>
                  <option value="Oil">Oil</option>
                  <option value="Rice">Rice</option>
                  <option value="Flour">Flour</option>
                  <option value="Dry Vegetable">Dry Vegetable</option>
                  <option value="Spices &amp; Mixes">Spices &amp; Mixes</option>
                  <option value="Bread">Bread</option>
                  <option value="Cereal">Cereal</option>
                  <option value="Tea">Tea</option>
                  <option value="Water">Water</option>
                  <option value="Juice">Juice</option>
                  <option value="Coffee">Coffee</option>
                  <option value="Energy Drinks">Energy Drinks</option>
                  <option value="Dairy">Dairy</option>
                  <option value="Ice Cream">Ice Cream</option>
                  <option value="Butter &amp; Ghee">Butter &amp; Ghee</option>
                  <option value="Organic Food">Organic Food</option>
                  <option value="Honey">Honey</option>
                  <option value="Sauces">Sauces</option>
                  <option value="Pickles &amp; Condiments">
                    Pickles &amp; Condiments
                  </option>
                  <option value="Jam &amp; Jelly">Jam &amp; Jelly</option>
                  <option value="Chocolate">Chocolate</option>
                  <option value="Chips &amp; Nuts">Chips &amp; Nuts</option>
                  <option value="Canned Food">Canned Food</option>
                  <option value="Cakes">Cakes</option>
                  <option value="Biscuits">Biscuits</option>
                  <option value="Cleaner">Cleaner</option>
                  <option value="Laundry">Laundry</option>
                  <option value="Air Freshener">Air Freshener</option>
                  <option value="Water Filter">Water Filter</option>
                  <option value="Pest Control">Pest Control</option>
                  <option value="Cleaning Tools">Cleaning Tools</option>
                  <option value="Baby Food">Baby Food</option>
                  <option value="Baby Accessories">Baby Accessories</option>
                  <option value="Cat Care">Cat Care</option>
                  <option value="Dog Care">Dog Care</option>
                  <option value="Bird Care">Bird Care</option>
                  <option value="Bath">Bath</option>
                  <option value="Cosmetics">Cosmetics</option>
                  <option value="Oral Care">Oral Care</option>
                  <option value="Skin Care">Skin Care</option>
                  <option value="Body Care">Body Care</option>
                  <option value="Shaving Needs">Shaving Needs</option>
                  <option value="Sports">Sports</option>
                  <option value="Fitness">Fitness</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label class="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Product Type
              </label>
              <div class="col-span-8 sm:col-span-4">
                <select
                  class="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
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

            <div class="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label class="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Unit (kg/pc/lb/ml/g...etc)
              </label>
              <div class="col-span-8 sm:col-span-4">
                <input
                  class="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  type="text"
                  name="unit"
                  placeholder="Unit"
                />
              </div>
            </div>

            <div class="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label class="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Product Quantity
              </label>
              <div class="col-span-8 sm:col-span-4">
                <input
                  class="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                />
              </div>
            </div>

            <div class="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label class="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Product Price
              </label>
              <div class="col-span-8 sm:col-span-4">
                <input
                  class="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  type="number"
                  name="originalPrice"
                  placeholder="Price"
                />
              </div>
            </div>

            <div class="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label class="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Sale Price
              </label>
              <div class="col-span-8 sm:col-span-4">
                <input
                  class="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  type="number"
                  name="salePrice"
                  placeholder="Sale price"
                />
              </div>
            </div>

            <div class="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label class="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Sale Price
              </label>
              <div class="col-span-8 sm:col-span-4">
                <input
                  class="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  type="number"
                  name="salePrice"
                  placeholder="Sale price"
                />
              </div>
            </div>

            <div class="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <label class="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                Product Tag
              </label>
              <div class="col-span-8 sm:col-span-4">
                <input
                  class="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  type="text"
                  name="salePrice"
                  placeholder="Product Tag (Write then press enter to add new tag )"
                />
              </div>
            </div>
          </div>

          <div class="fixed bottom-0 w-full right-0 py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex bg-gray-50 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
            <div class="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <button
                class="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-gray-600 border-gray-200 border dark:text-gray-500 focus:outline-none rounded-lg border border-gray-200 px-4 w-full mr-3 flex items-center justify-center cursor-pointer bg-gray-200 h-12 bg-white w-full text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-700"
                type="button"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
            <div class="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <button
                class="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-full h-12"
                type="submit"
              >
                {" "}
                <span>Add Product</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Products;

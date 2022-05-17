import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Products = lazy(() => import("../pages/Products"));
const Category = lazy(() => import("../pages/Category"));
const Customers = lazy(() => import("../pages/Customers"));
const Orders = lazy(() => import("../pages/Buttons"));
const Coupons = lazy(() => import("../pages/Coupons"));
const OurStaff = lazy(() => import("../pages/OurStaff"));
const Setting = lazy(() => import("../pages/Setting"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));

const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/customers",
    component: Customers,
  },
  {
    path: "/orders",
    component: Orders,
  },
  {
    path: "/coupons",
    component: Coupons,
  },
  {
    path: "/our-staff",
    component: OurStaff,
  },
  {
    path: "/setting",
    component: Setting,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
];

export default routes;

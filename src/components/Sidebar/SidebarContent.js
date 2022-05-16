import React from "react";
import { Link, NavLink, Route } from "react-router-dom";
import * as Icons from "../../icons";
import routes from "../../routes/sidebar";
import SidebarSubmenu from "./SidebarSubmenu";

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

function SidebarContent() {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <Link
        className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
        to="#"
      >
        Nur
      </Link>

      <ul className="mt-6">
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-6 py-3" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                activeClassName="text-gray-800 dark:text-gray-100"
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-green-500 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                <Icon
                  className="w-5 h-5"
                  aria-hidden="true"
                  icon={route.icon}
                />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>

      <div className="lg:fixed bottom-0 px-6 py-6 w-64 mx-auto">
        <button
          className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-5 py-3 rounded-lg text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-full"
          type="button"
        >
          <Icons.LogOutIcon />
          <span className="text-sm">Log Out</span>
        </button>
      </div>
    </div>
  );
}

export default SidebarContent;

import React, { createContext, useState } from "react";

// create context
export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  const value = {
    isSidebarOpen,
    toggleSidebar,
    closeSidebar,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

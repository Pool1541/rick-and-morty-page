import { createContext, useState } from "react";

export const PageContext = createContext();

export function PageContextProvider(props) {
  const [currentPage, setCurrentPage] = useState("Home");
  function changePage(page) {
    setCurrentPage(page);
  }

  return (
    <PageContext.Provider
      value={{
        changePage,
        currentPage,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
}

import { useContext } from "react";
import { PageContext } from "./context/pageContext";
import Header from "./components/header";
import Main from "./components/main";
import Home from "./components/home";
import Content from "./components/content";
import Contact from "./components/contact";

function App() {
  const { currentPage } = useContext(PageContext);
  return (
    <>
      <Header />
      <Main>
        {currentPage === "Home" ? (
          <Home />
        ) : currentPage === "Search" ? (
          <Content />
        ) : currentPage === "Contact" ? (
          <Contact />
        ) : null}
      </Main>
    </>
  );
}

export default App;

import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export function DataContextProvider(props) {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("name");
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const [recharge, setRecharge] = useState(false);
  // const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState("");
  function handleRecharge() {
    setRecharge(!recharge);
  }

  function getValue(value) {
    setValue(value);
    setRecharge(!recharge);
    setNextPage("");
    setCharacters([]);
  }

  useEffect(() => {
    setError(false);
    async function setAllCharacters() {
      let tempCharacters = [...characters];
      let tempNextPage =
        nextPage ||
        `https://rickandmortyapi.com/api/character/?&${filter}=${value}`;
      for (let i = 0; i < 3; i++) {
        try {
          const promise = await fetch(tempNextPage);
          if (promise.status === 404) {
            setError(true);
            break;
          }
          const data = await promise.json();
          const result = data;
          tempNextPage = result.info.next;
          tempCharacters = [...tempCharacters, ...result.results];
        } catch (error) {}
      }
      setNextPage(tempNextPage);
      setCharacters(tempCharacters);
    }

    if (nextPage !== null) {
      setAllCharacters();
    }
  }, [recharge]);

  // useEffect(() => {
  //   async function fetchCharacters() {
  //     if (page <= 42) {
  //       const [page1R, page2R, page3R] = await Promise.all([
  //         fetch(
  //           `https://rickandmortyapi.com/api/character/?page=${page}&${filter}=${value}`
  //         ),
  //         fetch(
  //           `https://rickandmortyapi.com/api/character/?page=${
  //             page + 1
  //           }&${filter}=${value}`
  //         ),
  //         fetch(
  //           `https://rickandmortyapi.com/api/character/?page=${
  //             page + 2
  //           }&${filter}=${value}`
  //         ),
  //       ]);

  //       const page1 = await page1R.json();
  //       const page2 = await page2R.json();
  //       const page3 = await page3R.json();
  //       setPage(page + 3);
  //       setCharacters([
  //         ...characters,
  //         ...page1.results,
  //         ...page2.results,
  //         ...page3.results,
  //       ]);
  //     }
  //   }
  //   fetchCharacters();
  // }, [recharge]);
  return (
    <DataContext.Provider
      value={{
        characters,
        error,
        handleRecharge,
        getValue,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

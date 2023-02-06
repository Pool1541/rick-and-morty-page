import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export function DataContextProvider(props) {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState([]);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [recharge, setRecharge] = useState(false);
  const [nextPage, setNextPage] = useState("");
  function handleRecharge() {
    setRecharge(!recharge);
  }

  function getValue(name, filters) {
    setName(name);
    setRecharge(!recharge);
    setNextPage("");
    setCharacters([]);
    setFilter(filters);
  }

  function linkConstructor() {
    let result = "";
    if (filter.length < 0) return result;
    filter.forEach((element) => {
      result = result.concat(`&${element[0]}=${element[1]}`);
    });
    return result;
  }

  useEffect(() => {
    setError(false);
    async function setAllCharacters() {
      let tempCharacters = [...characters];
      let tempNextPage =
        nextPage ||
        `https://rickandmortyapi.com/api/character/?&name=${name}${linkConstructor()}`;
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
          if (result.info.next === null) break;
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

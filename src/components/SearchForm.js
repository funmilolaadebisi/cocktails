import React, { useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef();

  React.useEffect(() => {
    searchValue.current.focus();
  });

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <article className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name"> search for your favorite cocktails </label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </article>
  );
};

export default SearchForm;

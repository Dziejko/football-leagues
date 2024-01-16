import React from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

function Search({ search, setSearch }) {
  const noSpaceSearch = (e) => {
    if (e.target.value !== " ") {
      setSearch(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <FormStyle onSubmit={handleSubmit}>
        <FaSearch />
        <input
          placeholder="Search"
          onChange={noSpaceSearch}
          value={search}
          type="text"
        />
      </FormStyle>
      <p>
        You can search your favourite league by typing name of league or country
        E.g.
        <span> England</span> or <span> Premier League </span> (capitalize is
        not neccesary)
      </p>
    </Wrapper>
  );
}

export default Search;

const FormStyle = styled.form`
  display: flex;
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid white;
  gap: 0.5rem;
  font-weight: 300;
  align-items: center;
  padding: 0.5rem;
  padding-left: 0;
  input {
    color: white;
    width: 100%;
  }
`;
const Wrapper = styled.div`
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
  gap: 0.2rem;
  width: 80%;
  @media (max-width: 65rem) {
    width: 75%;
  }
  p {
    font-size: 0.8rem;
    opacity: 80%;
    font-weight: 300;
  }

  span {
    color: red;
    font-size: 0.9rem;
    font-weight: 700;
  }
  @media (max-width: 900px) {
    max-width: 70%;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import Search from "./Search";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Pagination from "./Pagination";

function AllLeagues({ leagues }) {
  const [search, setSearch] = useState("");
  const [postsPerPage, setPostsPerPage] = useState(30);
  const [currentPage, setCurrentPage] = useState(1);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentLeagues = leagues.slice(firstPostIndex, lastPostIndex);

  const filteredLeagues = leagues.filter(
    (league) =>
      league.league.name.toLowerCase().includes(search.toLowerCase()) ||
      league.country.name.toLowerCase().includes(search.toLowerCase())
  );
  const filteredCurrentLeagues = filteredLeagues.slice(
    firstPostIndex,
    lastPostIndex
  );
  return (
    <Wrapper>
      <h2>ALL LEAGUES</h2>
      <Search search={search} setSearch={setSearch} />
      {search.length === 0 ? (
        <>
          <Grid
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {currentLeagues.map((league) => {
              return (
                <Link id={league.league.id} to={"/football-leagues/league/" + league.league.id}>
                  <Card>
                    <img src={league.league.logo} alt={league.league.name} />
                    <p>{league.league.name}</p>
                    <img
                      className="flag"
                      src={league.country.flag}
                      alt={league.country.name}
                    />
                  </Card>
                </Link>
              );
            })}
          </Grid>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPosts={leagues.length}
            postsPerPage={postsPerPage}
          />
        </>
      ) : (
        <>
          <Grid
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filteredCurrentLeagues.map((league) => {
              return (
                <Link  id={league.league.id} to={"/football-leagues/league/" + league.league.id}>
                  <Card>
                    <img src={league.league.logo} alt={league.league.name} />
                    <p>{league.league.name}</p>
                    <img
                      className="flag"
                      src={league.country.flag}
                      alt={league.country.name}
                    />
                  </Card>
                </Link>
              );
            })}
          </Grid>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPosts={filteredLeagues.length}
            postsPerPage={postsPerPage}
          />
        </>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  max-width: 63.75rem;
  margin: 5rem auto;
  text-align: center;

  @media (max-width: 65rem) {
    width: 95%;
  }
  h2 {
    color: white;
    text-shadow: 1px 1px red;
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;
const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, 14rem);
  row-gap: 3rem;
  justify-content: center;
  column-gap: 2rem;

  @media (max-width: 35rem) {
    grid-template-columns: repeat(auto-fit, 10rem);
  }
`;
const Card = styled.div`
  padding: 1rem;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 1px 1px 10px 1px #060047;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, rgb(242, 112, 156), rgb(255, 48, 114));
  gap: 1rem;
  min-height: 14rem;
  cursor: pointer;
  transform: scale(1);
  transition: all 250ms ease-in-out;
  position: relative;

  img {
    object-fit: contain;
    width: 4rem;
    height: 4rem;
  }
  p {
    font-weight: 700;
    text-align: center;
    color: #060047;
  }
  :hover {
    transform: scale(1.1);
  }
  .flag {
    position: absolute;
    width: 2rem;
    height: auto;
    box-shadow: 0px 0px 5px 1px #060047;
    border-radius: 0.5rem !important;
    left: 0.6rem;
    top: 0.6rem;
    padding: 0;
  }
  @media (max-width: 35rem) {
    min-height: 10rem;
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
    p {
      font-size: 0.9rem;
    }
    .flag {
      width: 1.5rem;
    }
  }
`;
export default AllLeagues;

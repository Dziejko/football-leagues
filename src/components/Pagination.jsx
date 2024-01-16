import React from "react";
import styled from "styled-components";
function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <Wrapper>
      {pages.map((page, index) => {
        return (
          <PaginationButton
            className={currentPage === page ? "active" : ""}
            onClick={() => setCurrentPage(page)}
            key={index}
          >
            {page}
          </PaginationButton>
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: fit-content;
  flex-wrap: wrap;
  margin: 2rem auto 5rem auto;
  display: flex;
  gap: 0.2rem;
  .active {
    background: linear-gradient(
      to right,
      rgb(242, 112, 156),
      rgb(255, 48, 114)
    );
    transform: scale(1.05);
  }
  @media (max-width: 65rem) {
    width: 65%;
  }
`;
const PaginationButton = styled.button`
  color: #060047;
  background-color: white;
  padding: 0.1rem;
  min-width: 2rem;
  font-size: 0.9rem;
  border: 1px solid red;
  border-radius: 0.2rem;
  cursor: pointer;
  font-weight: 700;
  :hover {
    background: linear-gradient(
      to right,
      rgb(242, 112, 156),
      rgb(255, 48, 114)
    );
  }
`;
export default Pagination;

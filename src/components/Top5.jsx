import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Top5({ leagues }) {
  return (
    <Wrapper>
      <h2>TOP 5 LEAGUES</h2>
      <Grid
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Splide
          options={{
            width: "100%",
            perPage: 2,
            breakpoints: {
              740: {
                perPage: 1,
              },
            },
            arrows: false,
            drag: "free",
            autoplay: "true",
            interval: 2000,
            pasuseOnHover: "true",
            rewind: "true",
          }}
        >
          {leagues.map((league, index) => {
            return (
              <SplideSlide>
                <Link id={index} to={"/football-leagues/league/" + league.league.id}>
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
              </SplideSlide>
            );
          })}
        </Splide>
      </Grid>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  max-width: 63.75rem;
  margin: 5rem auto;
  text-align: center;
  h2 {
    color: white;
    text-shadow: 1px 1px red;
    font-weight: 700;
    font-size: 2rem;
  }
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 50rem));
  grid-gap: 3rem;
  justify-content: center;
  margin: minmax(0.5rem, 2rem);
  @media (max-width: 740px) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 30rem));
  }
`;
const Card = styled.div`
  margin: 3rem 2rem;
  padding: 1rem;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 1px 1px 5px 1px #060047;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, rgb(242, 112, 156), rgb(255, 48, 114));
  gap: 1rem;
  min-height: 16rem;
  cursor: pointer;
  transform: scale(1);
  transition: all 250ms ease-in-out;
  position: relative;
  img {
    object-fit: contain;
    width: 5rem;
    height: 5rem;
  }
  p {
    font-size: 1.1rem;
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
`;
export default Top5;

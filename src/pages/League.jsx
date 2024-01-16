import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import LeagaueHeader from "../components/LeagaueHeader";
import Standings from "../components/Standings";
import TopScorers from "../components/TopScorers";

function League() {
  const [league, setLeague] = useState([]);
  const [topScorers, setTopScorers] = useState([]);

  const [activeTab, setActiveTab] = useState("standings");

  let params = useParams();

  useEffect(() => {
    getLeague(params.id);
    getTopScorers(params.id);
  }, [params.id]);

  const getLeague = async (leagueId) => {
    const check = localStorage.getItem("league" + leagueId);
    if (check) {
      setLeague(JSON.parse(check));
    } else {
      const url =
        "https://api-football-v1.p.rapidapi.com/v3/standings?season=2023&league=" +
        leagueId;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();
      if (data) {
        localStorage.setItem(
          "league" + leagueId,
          JSON.stringify(data.response)
        );
        setLeague(data.response);
      }
    }
  };
  const getTopScorers = async (leagueId) => {
    const check = localStorage.getItem("league" + leagueId + "top-scorers");

    if (check) {
      setTopScorers(JSON.parse(check));
    } else {
      const url =
        "https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=" +
        leagueId +
        "&season=2023";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();
      if (data) {
        localStorage.setItem(
          "league" + leagueId + "top-scorers",
          JSON.stringify(data.response)
        );
        setTopScorers(data.response);
      }
    }
  };

  return (
    <Wrapper>
      {league.length > 0 ? (
        <>
          <Link className="back-to-hp-link" to={"/football-leagues"}>
            BACK TO HOMEPAGE
          </Link>
          <LeagaueHeader leagueHeader={league[0]} />
          <ButtonsWrapper>
            <Button
              className={activeTab === "standings" ? "active" : ""}
              onClick={() => setActiveTab("standings")}
            >
              STANDINGS
            </Button>

            <Button
              className={activeTab === "top-scorers" ? "active" : ""}
              onClick={() => setActiveTab("top-scorers")}
            >
              TOP SCORERS
            </Button>
          </ButtonsWrapper>
          {activeTab === "standings" ? (
            <Standings leagueStandings={league[0].league.standings} />
          ) : (
            <TopScorers topScorers={topScorers} />
          )}
        </>
      ) : (
        <>
          <p>There is no info about this league sorry :(</p>
          <Link className="back-to-hp-link-no-info" to={"/football-leagues"}>
            BACK TO HOMEPAGE
          </Link>
        </>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  max-width: max-content;

  margin: 5rem auto;
  padding: 1rem;
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  .back-to-hp-link-no-info {
    display: block;
    text-align: center;
    margin-top: 1rem;
    width: 100%;
    border-radius: 0.5rem;
    padding: 0.4rem 1rem;
    color: white;
    font-weight: 700;
    font-size: 0.7rem;
    background-color: #060047;
  }
  p {
    color: #060047;
  }
  @media (max-width: 730px) {
    margin: 0 auto;
    border-radius: 0;
  }
  .back-to-hp-link {
    position: absolute;
    top: 1rem;
    right: 1rem;
    border-radius: 0.5rem;
    padding: 0.4rem 1rem;
    color: white;
    font-weight: 700;
    font-size: 0.7rem;
    background-color: #060047;
  }
  .active {
    background: linear-gradient(
      to right,
      rgb(242, 112, 156),
      rgb(255, 48, 114)
    );
    color: #060047;
    transform: scale(1.05);
  }
`;

const Button = styled.button`
  background-color: #060047;
  cursor: pointer;
  border-radius: 0.2rem;
  padding: 0.4rem 1rem;
  color: white;
  font-weight: 700;
  font-size: 0.7rem;
  :hover {
    background: linear-gradient(
      to right,
      rgb(242, 112, 156),
      rgb(255, 48, 114)
    );
    color: #060047;
  }
`;
const ButtonsWrapper = styled.div`
  margin: 1rem auto;
  width: 100%;
  display: flex;
  gap: 0.3rem;
`;
export default League;

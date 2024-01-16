import React from "react";

import { useState, useEffect } from "react";


import AllLeagues from "../components/AllLeagues";
import Top5 from "../components/Top5";

function Leagues() {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const check = localStorage.getItem("leagues");
    if (check) {
      setLeagues(JSON.parse(check));
    } else {
      const url =
        "https://api-football-v1.p.rapidapi.com/v3/leagues?season=2023&type=league";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();
      data.response.sort((a, b) =>
        a.country.name.localeCompare(b.country.name)
      );
      localStorage.setItem("leagues", JSON.stringify(data.response));
      setLeagues(data.response);
    }
  };
  const top5 = [140, 61, 78, 135, 39];

  return (
    <>
      <Top5
        leagues={leagues.filter((league) => top5.includes(league.league.id))}
      />
      <AllLeagues leagues={leagues} />
    </>
  );
}

export default Leagues;

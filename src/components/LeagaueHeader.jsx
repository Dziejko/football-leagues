import React from "react";
import styled from "styled-components";

function LeagaueHeader({ leagueHeader }) {
  return (
    <Header>
      <div className="country">
        <img src={leagueHeader.league.flag} alt={leagueHeader.league.country} />
        <h4>{leagueHeader.league.country}</h4>
      </div>
      <div className="league">
        <img src={leagueHeader.league.logo} alt={leagueHeader.league.name} />
        <h3>{leagueHeader.league.name}</h3>
        <p>
          {leagueHeader.league.season}/{leagueHeader.league.season + 1}
        </p>
      </div>
    </Header>
  );
}
const Header = styled.div`
  width: max-content;
  background-color: white;
  color: #060047;
  .country {
    display: flex;
    align-items: center;
    font-weight: 700;
    gap: 0.2rem;

    img {
      width: 1.5rem;
    }
  }
  .league {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    margin-top: 1rem;
    column-gap: 1rem;

    img {
      grid-column: 1/2;
      grid-row: 1/3;
      width: 5rem;
      object-fit: contain;
      height: 5rem;
    }
    h3 {
      grid-template-rows: 1/2;
      font-weight: 700;
    }
    p {
      grid-template-rows: 2/3;
    }
  }
`;

export default LeagaueHeader;

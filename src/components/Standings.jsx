import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Standings({ leagueStandings }) {
  function choseClass(text) {
    if (text === "W") {
      return "green";
    } else if (text === "L") {
      return "red";
    } else {
      return "orange";
    }
  }
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <TableStyle>
        <tr>
          <th>#</th>
          <th className="start">TEAM</th>
          <th>MP</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>G</th>
          <th>GD</th>
          <th className="points">P</th>
          <th className="form-header">FORM</th>
        </tr>
        {leagueStandings.length > 0 &&
          leagueStandings[0].map((team, index) => {
            return (
              <tr id={index}>
                <td className="rank">{team.rank}.</td>
                <td className="logo">
                  <img src={team.team.logo} alt={team.team.name} />
                  {team.team.name}
                </td>
                <td>{team.all.played}</td>
                <td>{team.all.win}</td>
                <td>{team.all.draw}</td>
                <td>{team.all.lose}</td>
                <td>
                  {team.all.goals.for}:{team.all.goals.against}
                </td>
                <td>{team.all.goals.for - team.all.goals.against}</td>
                <td className="points">{team.points}</td>

                <td className="form">
                  {team.form &&
                    team.form.split("").map((form) => {
                      return <span className={choseClass(form)}>{form}</span>;
                    })}
                </td>
              </tr>
            );
          })}
      </TableStyle>
    </Wrapper>
  );
}
const Wrapper = styled(motion.div)`
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`;
const TableStyle = styled.table`
  min-width: 700px;
  color: #060047;
  overflow: hidden;
  .start {
    text-align: start;
  }
  .green,
  .red,
  .orange {
    color: white;
    min-width: 1.6rem;
    border-radius: 0.5rem;
    text-align: center;
    padding: auto;
  }

  .green {
    background-color: green;
  }
  .red {
    background-color: red;
  }
  .orange {
    background-color: orange;
  }
  .points {
    font-weight: 700;
  }

  .rank {
    width: 0.5rem;
  }
  img {
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
  }
  td {
    margin: 0.3rem 0.5rem;
    text-align: center;
    font-size: 0.9rem;
  }
  th {
    padding: 0.5rem;
  }
  tr {
    border-bottom: 1px solid #c8d0de;
  }

  .logo {
    display: flex;

    align-items: center;
    gap: 0.2rem;
    font-weight: 700;
    transform: translateY(3.5px);
  }
  .form {
    display: flex;
    justify-content: space-between;
    transform: translateY(-3.5px);
  }

  .form-header {
    min-width: 10rem;
  }
`;
export default Standings;

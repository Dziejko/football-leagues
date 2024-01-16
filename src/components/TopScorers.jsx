import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";
function TopScorers({ topScorers }) {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <TableStyle>
        <tr className="start">
          <th className="center">#</th>
          <th className="player">PLAYER</th>
          <th>TEAM</th>
          <th className="center">G</th>
          <th className="center">A</th>
        </tr>

        {topScorers.length > 0 &&
          topScorers.map((player, index) => {
            return (
              <tr id={player.player.id}>
                <td className="center">{index + 1}.</td>
                <td className="logo">
                  <img src={player.player.photo} alt={player.player.name} />
                  {player.player.name}
                </td>
                <td>{player.statistics[0].team.name}</td>
                <td className="center">{player.statistics[0].goals.total}</td>
                {player.statistics[0].goals.assists ? (
                  <td className="center">
                    {player.statistics[0].goals.assists}
                  </td>
                ) : (
                  <td className="center">0</td>
                )}
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
  .logo {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
  .player {
    padding-left: 0.8rem;
  }
  .center {
    text-align: center;
  }
  img {
    width: 1.5rem;
  }
  td {
    margin: 0.3rem 0.5rem;
    font-size: 0.9rem;
  }
  th {
    font-weight: 700;
    text-align: start;
  }
  tr {
    border-bottom: 1px solid #c8d0de;
  }
`;
export default TopScorers;

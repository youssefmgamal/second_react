import Player from "./Player";
import data from "./data";
import React from "react";

const PlayerList = () => {
  return (
    <React.Fragment>
      {data.map((play) => (
        <Player
          name={play.name}
          age={play.age}
          team={play.team}
          nationality={play.nationality}
          jersyNumber={play.jersyNumber}
          image={play.image}
        />
      ))}
    </React.Fragment>
  );
};

export default PlayerList;

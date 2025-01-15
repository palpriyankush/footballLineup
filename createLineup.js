import lineups from './lineups.json' with {type: 'json'};

export const getStarters = function () {
  const startingEleven = this
    .filter((player) => player.positions
      .some((position) => position.from === "00:00"))
    .map(({ player_name, positions }) => ({
      name: player_name,
      position: positions[0].position
    }));

  return startingEleven;
};

const getLineupDetails = (lineups) => {
  const lineup = lineups.lineup;
  const startingEleven = getStarters(lineup);
  // const format = [`gk\n`, `def\n`, `mid\n`, `for\n`];



  // console.log(getStarting11());

};

getLineupDetails(lineups);
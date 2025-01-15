import lineups from './lineups.json' with {type: 'json'};

export const getStarters = function () {
  const startingEleven = this
    .filter((player) => player.positions
      .some((position) => position.from === "00:00"))
    .map((player) => player.player_name);

  return startingEleven.join('\n');
};

const getLineupDetails = (lineups) => {
  const lineup = lineups.lineup;
  const getStarting11 = getStarters.bind(lineup);

  console.log(getStarting11());

};

getLineupDetails(lineups);
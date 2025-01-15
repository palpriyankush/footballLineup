import lineups from './lineups.json' with {type: 'json'};

const filteredLineup = lineups.lineup.filter((player) => player.positions.some((position) => position.from === "00:00"));

console.log(filteredLineup);
import lineups from '../data/lineups.json' with {type: 'json'};
import { getSubstitutes } from './getSubstitutes.js';
import { playersOfEachPosition } from './starterByPos.js';
import { getStarters } from './starters.js';





const groundplay = (startingEleven) => {
  const ground = [
    [21, 24, 23, 22, 17],
    [16, 15, 14, 13, 12],
    [-1, 11, 10, 9, -1],
    [6, 5, 4, 3, 2],
    [-1, -1, 1, -1, -1],
  ];
  return ground.map((line) => {

    return line.map((role) => {
      if (role in startingEleven) {
        return `${startingEleven[role].jersey_number}(${startingEleven[role].player_name})`.padEnd(30, ' ');
      }
      return "  ".padEnd(30, ' ');
    }).join(" ");
  }).join("\n\n\n");
};

const getLineupDetails = (lineups) => {
  const lineup = lineups.lineup;
  const startingEleven = getStarters(lineup);
  return groundplay(startingEleven);

  // const playerByPosition = playersOfEachPosition(startingEleven);
  // console.log(startingEleven);
  // console.log(all_pos);
  // return JSON.stringify(playerByPosition, null, 3);
};

console.log(getLineupDetails(lineups));


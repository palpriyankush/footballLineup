import lineups from '../data/lineups.json' with {type: 'json'};
import { getSubstitutes } from './getSubstitutes.js';
import { playersOfEachPosition } from './starterByPos.js';
import { getStarters } from './starters.js';

const getLineupDetails = (lineups) => {
  const lineup = lineups.lineup;
  const startingEleven = getStarters(lineup);
  const playerByPosition = playersOfEachPosition(startingEleven);

  return JSON.stringify(playerByPosition, null, 3);
};

console.log(getLineupDetails(lineups));


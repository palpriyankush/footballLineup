export const playersOfEachPosition = (startingEleven) => {
  const playerByPosition = {
    GoalKeeper: [],
    Defender: [],
    Midfielder: [],
    Forward: []
  };
  const positionMap = {
    goalkeeper: 'GoalKeeper',
    back: 'Defender',
    midfield: 'Midfielder',
    forward: 'Forward'
  };

  startingEleven.forEach(({ name, position, jerseyNumber }) => {
    const positionInLowerCase = position.toLowerCase();
    const key = Object.keys(positionMap).find((key) => positionInLowerCase.includes(key));

    playerByPosition[positionMap[key]].push({ name, jerseyNumber });
  });

  return playerByPosition;
};
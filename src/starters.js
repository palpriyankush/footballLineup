export const getStarters = function (lineup) {
  const pos = {};
  const startingEleven = lineup
    .filter((player) => player.positions
      .some((position) => position.from === "00:00"));

  startingEleven.forEach(({ player_name, positions: [position], jersey_number }) => {
    // console.log(positions);
    if (position) {
      pos[position['position_id']] = {
        player_name, jersey_number
      };
    }
  });
  // console.log(pos);
  return pos;
};
export const getStarters = function (lineup) {
  const startingEleven = lineup
    .filter((player) => player.positions
      .some((position) => position.from === "00:00"))
    .map(({ player_name, positions, jersey_number }) => ({
      name: player_name,
      position: positions[0].position,
      jerseyNumber: jersey_number
    }));

  return startingEleven;
};
export const getSubstitutes = (lineup) => {
  return lineup.reduce((initial, player) => {
    if (player.positions[0] && player.positions[0]['from'] !== '00:00') {
      // console.log(player.positions[0]);
      initial.push({
        name: player.name,
        from: player.positions[0]['from']
      });
      return initial;
    }
  }, []);
};
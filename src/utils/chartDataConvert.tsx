export const topPointDriver = (data) => {
  let totalRaces = 0;
  data.forEach((driver) => {
    totalRaces += Number(driver.wins);
  });

  const topPointDriver_4 = data.map((driver) => {
    return {
      name: driver.Driver.familyName,
      wins: Number(driver.wins),
      winsRate: Math.round((driver.wins / totalRaces) * 100),
      points: Number(driver.points),
    };
  });
  return topPointDriver_4;
};

export const topWinDriver = (data) => {
  let totalRaces = 0;
  data.forEach((driver) => {
    totalRaces += Number(driver.wins);
  });

  const topWinDriver_4 = data
    .map((driver) => {
      return {
        name: driver.Driver.familyName,
        wins: Number(driver.wins),
        winsRate: Math.round((driver.wins / totalRaces) * 100),
        points: Number(driver.points),
      };
    })
    .sort((a, b) => Number(b.wins) - Number(a.wins));

  return topWinDriver_4;
};

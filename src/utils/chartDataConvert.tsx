export const chartDataConvert = (data) => {
  let totalRaces = 0;
  data.forEach((driver) => {
    totalRaces += Number(driver.wins);
  });

  const topDriver_4 = data.slice(0, 4).map((driver) => {
    return {
      name: driver.Driver.familyName,
      wins: driver.wins,
      winsRate: Math.round((driver.wins / totalRaces) * 100),
      points: driver.points,
    };
  });
  return topDriver_4;
};

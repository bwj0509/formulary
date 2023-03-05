import { defaultInstance } from "@/apis/utils/index";

export const getSeasons = async (page: number) => {
  try {
    const { data } = await defaultInstance.get(
      `seasons.json?limit=20&offset=${page}`
    );
    return data.MRData.SeasonTable.Seasons;
  } catch (error) {
    console.log(error);
  }
};

export const getStandingByYear = async (year: number) => {
  try {
    const { data } = await defaultInstance.get(`${year}/driverStandings.json`);
    return data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  } catch (error) {
    console.log(error);
  }
};

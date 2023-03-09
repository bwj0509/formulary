import { defaultInstance } from "@/apis/utils/index";

export const getNextRace = async () => {
  try {
    const { data } = await defaultInstance.get(
      `https://ergast.com/api/f1/current/next.json`
    );
    return data.MRData.RaceTable.Races[0];
  } catch (error) {
    console.log(error);
  }
};

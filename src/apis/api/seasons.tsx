import { defaultInstance } from "@/apis/utils/index";

export const getSeasons = async (page: number) => {
  try {
    const { data } = await defaultInstance.get(
      `seasons.json?limit=10&offset=${page}`
    );
    return data.MRData.SeasonTable.Seasons;
  } catch (error) {
    console.log(error);
  }
};

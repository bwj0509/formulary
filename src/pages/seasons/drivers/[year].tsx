import * as S from "@/styles/year.style";
import DriverCard from "@/components/card/driverCard";
import Axios from "axios";
import Head from "next/head";

export default function Year({ drivers }) {
  return (
    <S.CardContainer>
      <Head>
        <title>{drivers[0].Driver.familyName}</title>
        <meta name="nationality" content={drivers[0].Driver.nationality}></meta>
      </Head>
      {drivers &&
        drivers.map((driver, index) => (
          <DriverCard key={index} driver={driver} />
        ))}
    </S.CardContainer>
  );
}

export async function getServerSideProps(context) {
  const { year } = context.query;
  const apiUrl = `https://ergast.com/api/f1/${year}/driverStandings.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  return {
    props: {
      drivers: data,
    },
  };
}

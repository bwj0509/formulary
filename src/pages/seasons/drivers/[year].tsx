import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getDriverByYear } from "@/apis/api/seasons";

export default function Year() {
  const [drivers, setDrivers] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  console.log(router.query.year);
  useEffect(() => {
    getDriverByYear(Number(router.query.year)).then((res) => {
      setDrivers(res);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>로딩중...</div>;
  }

  return (
    <div>
      {drivers.map((driver) => (
        <div key={driver.code}>
          <div>
            {driver.code} : {driver.givenName} {driver.driverId}
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
}

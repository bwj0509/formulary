import { useRouter } from "next/router";

export default function TeamsDrivers() {
  const router = useRouter();
  return <div>{router.query.year}년 팀&드라이버 입니다.</div>;
}

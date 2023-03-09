import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

export const calculateRemainTime = (a, b) => {
  a = dayjs(a);
  b = dayjs(b);

  const remainTime = dayjs.duration(b.diff(a));
  return [
    remainTime.days(),
    remainTime.hours(),
    remainTime.minutes(),
    remainTime.seconds(),
    remainTime.milliseconds(),
  ];
};

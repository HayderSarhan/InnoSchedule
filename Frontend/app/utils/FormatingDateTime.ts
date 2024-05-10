import moment from "moment";

export const FormatingDateTime = (val: {
  date: string;
  hours: number;
  minutes: number;
}): string => {
  const originalDateTime: string = moment(val.date)
    .set({
      hour: val.hours,
      minute: val.minutes,
      second: 0,
      millisecond: 0,
    })
    .format("YYYY-MM-DDTHH:mm");
  return originalDateTime;
};

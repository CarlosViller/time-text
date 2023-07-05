import {
  ONE_MINUTE,
  ONE_DAY,
  ONE_HOUR,
  ONE_MONTH,
  ONE_WEEK,
  ONE_YEAR,
} from "./constants";

type Unit = "MIN" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR";

export default function customTime(amount: number, unit: Unit) {
  switch (unit) {
    case "MIN":
      return amount * ONE_MINUTE;
    case "HOUR":
      return amount * ONE_HOUR;
    case "MIN":
      return amount * ONE_DAY;
    case "MIN":
      return amount * ONE_WEEK;
    case "MIN":
      return amount * ONE_MONTH;
    case "MIN":
      return amount * ONE_YEAR;
    default:
      throw new Error("unit is not valid");
  }
}

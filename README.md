# Time text

## Overview
__time-text__ provides a set of numeric time duration variables in seconds, each with a descriptive name. It simplifies working with time durations by offering pre-defined constants for commonly used intervals.

### Default Time Durations
You can utilize default time duration variables, such as:
- `ONE_MINUTE`
- `FIVE_MINUTES`
- `FIFTEEN_MINUTES`
- `THIRTY_MINUTES`
- `FORTYFIVE_MINUTES`
- `ONE_HOUR`
- `FIVE_HOURS`
- `TWELVE_HOURS`
- `ONE_DAY`
- `FIFTEEN_DAYS`
- `ONE_WEEK`
- `ONE_MONTH`
- `ONE_YEAR`

### Custom Time Durations
Additionally, you have the flexibility to create custom time durations by specifying values in minutes, hours, days, months, or years using the `customTime` function.

```javascript
import { customTime } from "time-text";

const HALF_WEEK = customTime(0.5, "WEEK");

console.log(HALF_WEEK); // 302,400

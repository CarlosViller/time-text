"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customTime = void 0;
const constants_1 = require("./constants");
function customTime(amount, unit) {
    switch (unit) {
        case "MIN":
            return amount * constants_1.ONE_MINUTE;
        case "HOUR":
            return amount * constants_1.ONE_HOUR;
        case "MIN":
            return amount * constants_1.ONE_DAY;
        case "MIN":
            return amount * constants_1.ONE_WEEK;
        case "MIN":
            return amount * constants_1.ONE_MONTH;
        case "MIN":
            return amount * constants_1.ONE_YEAR;
        default:
            throw new Error("unit is not valid");
    }
}
exports.customTime = customTime;

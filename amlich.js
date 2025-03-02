// lunarSolar.js - Adapted from https://github.com/quangvinh86/SolarLunarCalendar/blob/master/LunarSolar.py
function INT(d) {
    return Math.floor(d);
}

function degreeToRadian(degree) {
    return Math.PI * degree / 180;
}

function newMoon(k) {
    const timeJulian = k / 1236.85;
    const timeJulian2 = timeJulian * timeJulian;
    const timeJulian3 = timeJulian2 * timeJulian;
    const degreeRad = Math.PI / 180;

    let julianDay1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * timeJulian2 - 0.000000155 * timeJulian3;
    julianDay1 += 0.00033 * Math.sin(degreeToRadian(166.56 + 132.87 * timeJulian - 0.009173 * timeJulian2));

    const meanNewMoon = 359.2242 + 29.10535608 * k - 0.0000333 * timeJulian2 - 0.00000347 * timeJulian3;
    const sunMeanAnomaly = 306.0253 + 385.81691806 * k + 0.0107306 * timeJulian2 + 0.00001236 * timeJulian3;
    const moonMeanAnomaly = 21.2964 + 390.67050646 * k - 0.0016528 * timeJulian2 - 0.00000239 * timeJulian3;

    let moonArgLat = (0.1734 - 0.000393 * timeJulian) * Math.sin(degreeToRadian * meanNewMoon) + 0.0021 * Math.sin(degreeToRadian * 2 * meanNewMoon);
    moonArgLat -= 0.4068 * Math.sin(degreeToRadian * sunMeanAnomaly) + 0.0161 * Math.sin(degreeToRadian * 2 * sunMeanAnomaly);
    moonArgLat -= 0.0004 * Math.sin(degreeToRadian * 3 * sunMeanAnomaly);
    moonArgLat += 0.0104 * Math.sin(degreeToRadian * 2 * moonMeanAnomaly) - 0.0051 * Math.sin(degreeToRadian * (meanNewMoon + sunMeanAnomaly));
    moonArgLat -= 0.0074 * Math.sin(degreeToRadian * (meanNewMoon - sunMeanAnomaly)) + 0.0004 * Math.sin(degreeToRadian * (2 * moonMeanAnomaly + meanNewMoon));
    moonArgLat -= 0.0004 * Math.sin(degreeToRadian * (2 * moonMeanAnomaly - meanNewMoon)) - 0.0006 * Math.sin(degreeToRadian * (2 * moonMeanAnomaly + sunMeanAnomaly));
    moonArgLat += 0.0010 * Math.sin(degreeToRadian * (2 * moonMeanAnomaly - sunMeanAnomaly)) + 0.0005 * Math.sin(degreeToRadian * (2 * sunMeanAnomaly + meanNewMoon));

    const deltat = (timeJulian < -11) ?
        (0.001 + 0.000839 * timeJulian + 0.0002261 * timeJulian2 - 0.00000845 * timeJulian3 - 0.000000081 * timeJulian * timeJulian3) :
        (-0.000278 + 0.000265 * timeJulian + 0.000262 * timeJulian2);

    return julianDay1 + moonArgLat - deltat;
}

function julianDayFromDate(dd, mm, yy) {
    const a = INT((14 - mm) / 12);
    const y = yy + 4800 - a;
    const m = mm + 12 * a - 3;
    let jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - INT(y / 100) + INT(y / 400) - 32045;
    if (jd < 2299161) {
        jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - 32083;
    }
    return jd;
}

function getNewMoonDay(k, timeZone) {
    return INT(newMoon(k) + 0.5 + timeZone / 24);
}

function getLunarMonth11(yy, timeZone) {
    const off = julianDayFromDate(31, 12, yy) - 2415021;
    let k = INT(off / 29.530588853);
    let nm = getNewMoonDay(k, timeZone);
    const sunLong = getSunLongitude(nm, timeZone);
    if (sunLong >= 9) {
        nm = getNewMoonDay(k - 1, timeZone);
    }
    return nm;
}

function getSunLongitude(jdn, timeZone) {
    const T = (jdn - 2451545.0 - timeZone / 24) / 36525;
    const T2 = T * T;
    const dr = Math.PI / 180;
    const M = 357.52910 + 35999.05030 * T - 0.0001559 * T2 - 0.00000048 * T * T2;
    let L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2;
    let DL = (1.914600 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
    DL += (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.000290 * Math.sin(dr * 3 * M);
    let L = L0 + DL;
    L = L * dr;
    L = L - Math.PI * 2 * INT(L / (Math.PI * 2));
    return INT(L / Math.PI * 6);
}

function getLeapMonthOffset(a11, timeZone) {
    const k = INT((a11 - 2415021.076998695) / 29.530588853 + 0.5);
    let last = 0;
    let i = 1;
    let arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
    do {
        last = arc;
        i += 1;
        arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
    } while (arc !== last && i < 14);
    return i - 1;
}

function convertSolar2Lunar(dd, mm, yy, timeZone) {
    const dayNumber = julianDayFromDate(dd, mm, yy);
    let k = INT((dayNumber - 2415021.076998695) / 29.530588853);
    let monthStart = getNewMoonDay(k + 1, timeZone);
    if (monthStart > dayNumber) {
        monthStart = getNewMoonDay(k, timeZone);
    }
    let a11 = getLunarMonth11(yy, timeZone);
    let b11 = a11;
    if (a11 >= monthStart) {
        k = INT((a11 - 2415021.076998695) / 29.530588853);
        b11 = getLunarMonth11(yy - 1, timeZone);
    } else {
        k = INT((dayNumber - 2415021.076998695) / 29.530588853);
        a11 = getLunarMonth11(yy + 1, timeZone);
    }
    const off = monthStart - b11;
    const leapOff = getLeapMonthOffset(b11, timeZone);
    const leapMonth = leapOff >= off ? 1 : 0;
    let lunarMonth = off + 1;
    if (a11 === b11) lunarMonth += 11;
    if (leapMonth && lunarMonth > leapOff) lunarMonth -= 1;
    const lunarDay = dayNumber - monthStart + 1;
    const lunarYear = (a11 >= monthStart) ? yy : yy + 1;
    return { lunarDay, lunarMonth, lunarYear, lunarLeap: leapMonth };
}

window.convertSolar2Lunar = convertSolar2Lunar;
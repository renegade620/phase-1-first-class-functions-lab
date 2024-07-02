// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
// returnFirstTwoDrivers is a function that returns a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}
// output
console.log(returnFirstTwoDrivers(drivers));

// returnFirstTwoDrivers is a function that returns a new array containing the last two drivers from the passed-in array
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}
// output
console.log(returnLastTwoDrivers(drivers));

// selectingDrivers combines the above functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(selectingDrivers);

// createFareMultiplier()
function createFareMultiplier(x) {
    return function(fare) {
        return x *= fare;
    }
}

// doubles the fare
const fareDoubler = createFareMultiplier(2);
// triples the fare
const fareTripler = createFareMultiplier(3);

//
// const selectingDifferentDrivers = function (selectingDrivers, fn) {
//     return fn(drivers) {
//         if (selectingDrivers[0]) {
//             return returnFirstTwoDrivers;
//         } else {
//             return returnLastTwoDrivers;
//         }
//     }
// }

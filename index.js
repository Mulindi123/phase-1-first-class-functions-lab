// Code your solution in this file!

let drivers = ['Michael', 'Mary', 'Julius', 'Mark', 'Ruth']


const returnFirstTwoDrivers =function(drivers) {
const newDrivers = drivers.slice(0,2);
return newDrivers;
}
returnFirstTwoDrivers(drivers);

const returnLastTwoDrivers = function(drivers){
    const lastDrivers = drivers.slice(-2);
    return lastDrivers;
}
returnLastTwoDrivers(drivers);


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function (multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  };
  
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, selectorFunction) {
    return selectorFunction(drivers);
  };
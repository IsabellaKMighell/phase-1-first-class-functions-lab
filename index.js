// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
        return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return function(value){
        return num * value;
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, selectedDriverFunction){
    return selectedDriverFunction(drivers);
}




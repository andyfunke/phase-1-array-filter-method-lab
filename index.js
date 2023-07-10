// Code your solution here

// const drivers = [{name:'Bobby'}, {name:'Sammy'}, {name:'Sally'}, {name:'Annette'}, {name:'Sarah'}, {name:'bobby'}]
// const drivers = ['Bobby','Sammy','Sally','Annette','Sarah','bobby']

function findMatching(drivers, driver){
    const returnValue = drivers.filter(drivers => drivers.toLowerCase() === driver.toLowerCase());
    return returnValue;
    }

function fuzzyMatch(drivers, driver){
    const returnValue = drivers.filter(drivers => drivers[0] === driver[0]);

    return returnValue;
        }

function matchName(drivers, driver){
    const returnValue = drivers.filter(drivers => drivers.name === driver);

    return returnValue;
}
    
matchName(drivers,'Bobby');

fuzzyMatch(drivers,'Bobby');

findMatching(drivers,'Bobby');
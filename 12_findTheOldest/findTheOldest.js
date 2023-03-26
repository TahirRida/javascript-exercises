const findTheOldest = function(array) {
    let person;
    let maxAge = 0;
    for ( let i = 0; i<array.length; i++){
        let yearOfDeath = array[i].yearOfDeath;
        if (yearOfDeath === undefined){
            yearOfDeath = new Date().getFullYear();
        }
        if ((yearOfDeath - array[i].yearOfBirth) > maxAge ){
            person = array[i];
            maxAge = yearOfDeath - array[i].yearOfBirth;
        }
    }
    return person;

};

// Do not edit below this line
module.exports = findTheOldest;

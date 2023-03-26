const leapYears = function(year) {
    //first we'll check if year is divisible by 4
    if (year % 4 == 0){
        //let's check right now if year is divisible by 100
        if (year % 100 == 0 && year % 400 != 0){
                return false;

        }
        return true ;

    }
    // if the year is not divisible by 4, then ther is no way it may be leap.
    return false;

};

// Do not edit below this line
module.exports = leapYears;

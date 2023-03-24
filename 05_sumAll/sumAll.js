const sumAll = function(min,max) {
    //the function should return ERROR when the given arguments are not numbers
    if (!Number.isInteger(min) || !Number.isInteger(max) || isNaN(min)  || isNaN(max) || min<0 || max<0){
        return 'ERROR' ;
    }
    //if the arguments are not in order (i.e the second argument is bigger than the first), we'll swap them
    if (min > max){
        const temp = max;
        max = min;
        min = temp;
    }
    let sum = 0;
    for (let i = min;i<=max;i++){
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;

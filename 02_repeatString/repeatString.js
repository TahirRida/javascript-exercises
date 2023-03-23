function repeatString(stringSource,numberOfTimes) {
    if (numberOfTimes === 0){
        return '';
    }
    if (numberOfTimes < 0 ){
        return 'ERROR';
    }
    let result=stringSource;
    for (let i = 1;i<numberOfTimes;i++){
        result+=stringSource;
    }
    return result;

};

// Do not edit below this line
module.exports = repeatString;

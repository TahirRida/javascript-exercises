const fibonacci = function(number) {
    if (number < -1){
        return "OOPS" ;
    }
    if (number == 1 || number == 0){
        return parseInt(number);
    }
    else {
        return fibonacci(number-1) + fibonacci(number -2);
    }

};

// Do not edit below this line
module.exports = fibonacci;

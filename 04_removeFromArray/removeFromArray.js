const removeFromArray = function(array) {
    for (let i = 0; i<arguments.length;i++){
        if (array.includes(arguments[i])){
            for (let j = 0; j<array.length;j++){
                if (array[j] === arguments[i]){
                    array.splice(j,1);
                    break;
                }
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

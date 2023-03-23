const reverseString = function(string) {
    let correspondantArray = string.split("");
    string = "";
    for (let i = correspondantArray.length-1; i>=0;i--){
        string+=correspondantArray[i];
    }
    return string;

};

// Do not edit below this line
module.exports = reverseString;

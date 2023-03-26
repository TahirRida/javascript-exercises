const palindromes = function (string){
    let arrayString = string.toLowerCase().split("")
    //let's remove special characters from the string
    arrayString = arrayString.filter(isAlphabet);
    //let's create another array that we'll reverse and compare with arrayString
    let reversedArray = [];
    let j = 0;
    for (let i = arrayString.length;i >= 0;i--){
        reversedArray[j]= arrayString[i];
        j++;
    }
    reversedArray.splice(0,1); // to remove the first element that is undefined
    return areEqual(reversedArray,arrayString);
    
}
// this function is made to check wether an element is an alphabet
function isAlphabet (c){
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    return alphabet.includes(c) 
}
// to check the equality between two arrays
function areEqual(array1 , array2){
    if (array1.length != array2.length ){
        return false;
    }
    for (let i = 0; i<array1.length ; i++){
        if (array1[i] != array2[i]){
            return false
        }
    }
    return true
}

// Do not edit below this line
module.exports = palindromes;

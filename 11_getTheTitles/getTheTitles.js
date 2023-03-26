const getTheTitles = function(booksArray) {
    let titlesArray = [booksArray[0].title];
    for (let i = 1; i<booksArray.length; i++){
        titlesArray.push(booksArray[i].title);
    }
    return titlesArray;

};

// Do not edit below this line
module.exports = getTheTitles;

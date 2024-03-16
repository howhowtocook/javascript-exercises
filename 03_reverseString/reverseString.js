const reverseString = function(word) {
    let drow = '';
    for(i=1;i<=word.length;i++){
        drow += word[word.length-i]
    }
    return drow

};

// Do not edit below this line
module.exports = reverseString;

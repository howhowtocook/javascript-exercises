const sumAll = function(a,b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (a < 0 || b < 0) return "ERROR";

    let result = 0;
    for (i=a;i<=b;i++){
        result += i
    }
    return result;


};

// Do not edit below this line
module.exports = sumAll;

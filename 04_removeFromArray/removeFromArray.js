const removeFromArray = function(list,...theArgs) {
  return list.filter(function (item) {
    let index = 1;
    for (const arg of theArgs){
      if (item==arg){
        index = 0;
      }
      return index;
    }})


};

// Do not edit below this line
module.exports = removeFromArray;



 
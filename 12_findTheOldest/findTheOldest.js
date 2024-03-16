const findTheOldest = function(people) {
    function getDeathYearOrCurrentYear(obj) {
        if ('yearOfDeath' in obj && obj.yearOfDeath !== null && obj.yearOfDeath !== undefined) {
          return obj.yearOfDeath;
        } else {
          return new Date().getFullYear();
        }
      }
return people.sort((a, b) => (getDeathYearOrCurrentYear(b)-b.yearOfBirth) - (getDeathYearOrCurrentYear(a)-a.yearOfBirth))[0].name;

};

// Do not edit below this line
module.exports = findTheOldest;


const fibonacci = function(i) {
    switch(i) {
        case 1:
          return 1;
          break;
        case 2:
          return 1;
          break;
        default:
          return fibonacci(i-1) + fibonacci(i-2);
      }

};

// Do not edit below this line
module.exports = fibonacci;


1, 1, 2, 3, 5, 8, 
f(x)=f(x-1)+f(x-2)
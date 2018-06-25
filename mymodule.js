let counter = function(arr){
  return 'There are ' + arr.length + ' elemnts in the array';
};

let adder= function(a,b){
  return `Addition of the two results in ${a+b}`;
};

exports.myDateTime = function () {
    return Date();
};

module.exports.counter = counter;
module.exports.adder = adder;

//return single function module.exports = adder;
//console.log(counter (['prasu','chakraborty']))
var _ = require('./lodash');
var __ = require('./util.js');

// higher-ordered function for comparisons
function comparator(pred) {
  return function(x, y) {
    if (__.truthy(pred(x, y)))
      return -1;
    else if (__.truthy(pred(y, x)))
      return 1;
    else
      return 0;
  };
};

function lessOrEqual(x, y) {
  return x <= y;
}

function log(x) { console.log(x);}

var arr = [2, 3, -1, -6, 0, -108, 42, 10];
__.assert(_.isEqual([-108,-6,-1,0,2,3,10,42], arr.sort(comparator(lessOrEqual)), "why you no know how compare?"));

// a fancy identity comparator
__.assert(_.isEqual(arr, arr.sort(comparator(_.isEqual))));

// rest is another name for tail, apparently.
__.assert(_.isEqual(_.rest(arr), _.tail(arr)));

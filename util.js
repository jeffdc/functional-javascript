
exports.existy = function(x) { return x != null; };

exports.truthy = function(x) { 
  return (x !== false) && this.existy(x); 
};

exports.assert = function(cond, msg) {
  if (!this.truthy(cond)) console.error("ASSERTION FAIL: " + msg)
};
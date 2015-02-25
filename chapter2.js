var _ = require('./lodash');
var __ = require('./util.js');

function log(x) { console.log(x);}

log(_.each);

var a = {name: "a", fun: function () { return this; }};
log(a.fun());
var bObj = {name: "b", fun: function(){ return this }};
log(bObj.fun());    
var bFunc = bObj.fun;
// bFunc is something else!
__.assert(bObj.fun() != bFunc());

log(_.map({a: 1, b: 2}, function(v, k, coll) { return [k, v, _.keys(coll)]; }));
//=> [ [ 'a', 1, [ 'a', 'b' ] ], [ 'b', 2, [ 'a', 'b' ] ] ]


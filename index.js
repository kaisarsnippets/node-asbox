// Secure async code evaluation
var run  = require('vm').runInNewContext;
module.exports = function(src, data, cb) {
    var out = '';
    data = data || {};
    cb = cb || function(){};
    var prom = new Promise(function(a, r) {
        try { a(run(src, data));
        } catch(e) { r(e); }
    });
    prom.then(function(out){
        cb(out || '');
    }).catch(function(e){
        console.log(e);
    });
    return prom;
}

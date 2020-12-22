# ASbox
[nodejs] Secure async code evaluation

### Install
```
npm install asbox
```
### Usage
```js
var run = require('asbox');
var src = "(function(){ return v; })()";
run(src, { v: 42 }, function(out){
    console.log(out);
});
console.log('This runs before');
```

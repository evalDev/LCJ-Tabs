var test =(function(){
  "use strict";
  var add = function(a, b){
    return a+b;
  };

  return {
    add: add
  };
}());
exports.add = test.add;

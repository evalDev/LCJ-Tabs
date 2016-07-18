var test =(function(){
  "use strict";
  var add = function(a, b){
    return a+b;
  };

  return {
    add: add
  };
}());
if (typeof module !== 'undefined' && module.exports) {
  exports.add = test.add;
}

(function(){
  "use strict";

  desc("Default Task");
  task("default",[ "version"], function(){
    console.log("\n\nBuild OK!!");
  });
  desc("Check Node version");
  task("version", function(){
    var packageJson = require('./package.json');
    var expectedVersion ="v"+ packageJson.engines.node;
    var actualVersion = process.version;
    if (actualVersion !== expectedVersion){
      fail( "Incorect Node version: expected " + expectedVersion +", but was " + actualVersion);
    }
    console.log("Checking Node version: .");
  });
}());

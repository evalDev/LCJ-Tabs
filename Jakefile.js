(function(){
  "use strict";

  desc("Default Task");
  task("default",[ "version", "lint"], function(){
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
  desc("JS Linting");
  task("lint", function(){
    console.log("Linting Javascipt .");
    jake.exec("node node_modules/jshint/bin/jshint Jakefile.js", { interactive: true}, complete);
  },{async: true});
}());

/* globals desc: false, jake:false, task:false, complete: false, fail: false */
(function(){
  "use strict";
  
  //General Purpose Tasks

  desc("Default Task");
  task("default",[ "version", "lint"], function(){
    console.log("\n\nBuild OK!!");
  });

  desc("Run a Localhost Server");
  task("run", function(){
    console.log("Run http-server here");
    jake.exec("node node_modules/http-server/bin/http-server src", {interactive: true}, complete);
  });
  // Supporting Tasks
  
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

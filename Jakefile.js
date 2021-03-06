/* globals desc: false, jake:false, task:false, complete: false, fail: false */
(function(){
  "use strict";
  
  //General Purpose Tasks

  desc("Default Task");
  task("default",[ "version", "lint", "test"], function(){
    console.log("\n\nBuild OK!!");
  });

  desc("Run a Localhost Server");
  task("run", function(){
    console.log("Run http-server here");
    jake.exec("node node_modules/http-server/bin/http-server src", {interactive: true}, complete);
  });
  
  desc("Test JS");
  task("test", function(){
    console.log("Testing Javascript .");
    jake.exec("node ./node_modules/jasmine/bin/jasmine.js spec/*.js", {interactive: true}, complete);
  },{async: true});
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
    jake.exec("node node_modules/jshint/bin/jshint Jakefile.js src/*.js", { interactive: true}, complete);
  },{async: true});
}());

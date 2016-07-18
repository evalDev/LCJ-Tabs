/* globals describe: false, it: false, expect: false */
"use strict";
var addition= require('../src/test.js');

describe("Additon", function(){
  it("adds positive numbers", function(){
    expect(addition.add(2,3)).toBe(5);
  });
  it("uses IEEE 754 floating point", function(){
    expect(addition.add(0.1, 0.2)).toBe(0.30000000000000004);
  });
});

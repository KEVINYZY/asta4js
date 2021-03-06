"use strict";

var util = require("../../src/util.js")

describe('util test', function () {
  it("determineRefPath should work", function() {
    var scope = {
      undef: undefined,
      data: {}
    };
    var path = util.determineRefPath(scope, scope.data);
    expect(path).toBe("data");
  });
});
// Generated by CoffeeScript 1.6.2
var code_eq, p, _ref;

_ref = require('./helper'), p = _ref.p, code_eq = _ref.code_eq;

describe('autocb', function() {
  it('simple', function() {
    return code_eq("x = (autocb)->", "var x\nx = function(autocb) {\n	autocb();\n}");
  });
  it('simple 2', function() {
    return code_eq("x = (autocb) ->\n	y!", "var x\nx = function(autocb){\n	var _this = this\n	y(function(v) {\n		autocb(v);\n	});\n}");
  });
  it('simple 3', function() {
    return code_eq("x = (autocb) ->\n	x = y!", "var x\nx = function(autocb){\n	var _this = this\n	y(function() {\n		autocb(x = arguments[0]);\n	});\n}");
  });
  return it('empty return', function() {
    return code_eq("x = (autocb)-> return", "var x\nx = function(autocb) {\n	return autocb();\n}");
  });
});

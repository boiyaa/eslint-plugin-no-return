/**
 * @fileoverview Tests for no-return rule.
 * @author boiyaa
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-return"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6 } });
var errors = [{
    message: "Unexpected return, use concise body syntax instead.",
    type: "ReturnStatement"
}];
ruleTester.run("no-return", rule, {

    valid: [
        {
            code: "var foo = bar => bar * 2;"
        }
    ],

    invalid: [
        {
            code: "function foo(bar) { var baz = bar * 2; return baz; }",
            errors
        },
        {
            code: "var foo = function (bar) { var baz = bar * 2; return baz; };",
            errors
        },
        {
            code: "var foo = bar => { var baz = bar * 2; return baz; };",
            errors
        }
    ]
});

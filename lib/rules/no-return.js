/**
 * @fileoverview A rule to disallow return statement
 * @author boiyaa
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow `return` statements",
            category: "Rules",
            recommended: true
        },
        fixable: null,
        schema: []
    },

    create(context) {
        return {
            ReturnStatement(node) {
                context.report({ node, message: "Unexpected return, use concise body syntax instead." });
            }
        };
    }
};

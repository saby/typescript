"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Lint = require("tslint");
var ts = require("typescript");
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new DocLibraryIncludesWalker(sourceFile, this.getOptions()));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
// The walker takes care of all the work.
var DocLibraryIncludesWalker = /** @class */ (function (_super) {
    __extends(DocLibraryIncludesWalker, _super);
    function DocLibraryIncludesWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocLibraryIncludesWalker.prototype.walk = function (node) {
        var _this = this;
        ts.forEachChild(node, function (child) {
            if (child.jsDoc) {
                var tags = child.jsDoc[0].tags;
                var isLibary_1 = false;
                var includes_1 = new Set();
                if (tags) {
                    tags.forEach(function (tag) {
                        if (tag.tagName.escapedText == 'library') {
                            isLibary_1 = true;
                        }
                        if (tag.tagName.escapedText == 'include') {
                            _this.addFailure(_this.createFailure(tag.getStart(), tag.getWidth(), 'Tag @include is not supported. Do you mean tag @includes?'));
                        }
                        if (tag.tagName.escapedText == 'includes') {
                            var parts = tag.comment.split(' ');
                            if (parts.length != 2) {
                                _this.addFailure(_this.createFailure(tag.getStart(), tag.getWidth(), 'Tag @includes has incorrect format. Usage: @includes Alias ClassName'));
                            }
                            var canonizedTag = parts.join(' ');
                            if (isLibary_1 && includes_1.has(canonizedTag)) {
                                _this.addFailure(_this.createFailure(tag.getStart(), tag.getWidth(), "Tag @includes '" + tag.comment + "' is not unique in this library. Check all includes"));
                            }
                            includes_1.add(canonizedTag);
                        }
                    });
                }
            }
        });
    };
    return DocLibraryIncludesWalker;
}(Lint.RuleWalker));

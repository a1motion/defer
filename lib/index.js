var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var DeferedPromise = /** @class */ (function (_super) {
        __extends(DeferedPromise, _super);
        function DeferedPromise() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.resolve = function () { return void 0; };
            _this.reject = function () { return void 0; };
            return _this;
        }
        return DeferedPromise;
    }(Promise));
    return function defer() {
        var res = function () { return void 0; };
        var rej = function () { return void 0; };
        var promise = new DeferedPromise(function (resolve, reject) {
            res = resolve;
            rej = reject;
        });
        promise.resolve = res;
        promise.reject = rej;
        return promise;
    };
});

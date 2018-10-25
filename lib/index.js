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
    class DeferedPromise extends Promise {
        constructor() {
            super(...arguments);
            this.resolve = () => void 0;
            this.reject = () => void 0;
        }
    }
    return function defer() {
        let res = () => void 0;
        let rej = () => void 0;
        var promise = new DeferedPromise((resolve, reject) => {
            res = resolve;
            rej = reject;
        });
        promise.resolve = res;
        promise.reject = rej;
        return promise;
    };
});

"use strict";
class DeferedPromise extends Promise {
    constructor() {
        super(...arguments);
        this.resolve = () => void 0;
        this.reject = () => void 0;
    }
}
module.exports = function defer() {
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

module.exports = function defer(): DeferedPromise<any> {
	let res: PromiseFunction = () => void 0;
	let rej: PromiseFunction = () => void 0;

	var promise: DeferedPromise<any> = new DeferedPromise((resolve, reject) => {
		res = resolve;
		rej = reject;
	});

	promise.resolve = res;
	promise.reject = rej;

	return promise;
}
type PromiseFunction = (value?: {} | PromiseLike<{}> | undefined) => void;
class DeferedPromise<T> extends Promise<T> {
	public resolve: PromiseFunction = () => void 0;
	public reject: PromiseFunction = () => void 0;
}
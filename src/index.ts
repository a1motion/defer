type PromiseFunction = (value?: {} | PromiseLike<{}> | undefined) => void;

export class DeferedPromise extends Promise<any> {
  public resolve: PromiseFunction = () => void 0;
  public reject: PromiseFunction = () => void 0;
}

export default function defer(): DeferedPromise {
  let res: PromiseFunction = () => void 0;
  let rej: PromiseFunction = () => void 0;

  const promise: DeferedPromise = new DeferedPromise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });

  promise.resolve = res;
  promise.reject = rej;

  return promise;
}

declare type PromiseFunction = (value?: {} | PromiseLike<{}> | undefined) => void;
declare class DeferedPromise<T> extends Promise<T> {
    resolve: PromiseFunction;
    reject: PromiseFunction;
}

export default function defer(): DeferedPromise;
declare type PromiseFunction = (value?: {} | PromiseLike<{}> | undefined) => void;
export declare class DeferedPromise extends Promise<any> {
    resolve: PromiseFunction;
    reject: PromiseFunction;
}
export {};

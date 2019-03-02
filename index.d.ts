export interface Options {
	/**
	 * Number of concurrent pending promises. Minimum: `1`.
	 *
	 * @default Infinity
	 */
	concurrency?: number;
}

export type PromiseFactory<T> = () => PromiseLike<T>;

/**
 * Run promise-returning & async functions concurrently with optional limited concurrency.
 *
 * @param tasks - Iterable with promise-returning/async functions.
 * @returns A `Promise` that is fulfilled when all promises returned from calling the functions in `tasks` are fulfilled, or rejects if any of the promises reject. The fulfilled value is an `Array` of the fulfilled values in `tasks` order.
 */
declare function pAll<
	Result1,
	Result2,
	Result3,
	Result4,
	Result5,
	Result6,
	Result7,
	Result8,
	Result9,
	Result10
>(
	tasks: [
		PromiseFactory<Result1>,
		PromiseFactory<Result2>,
		PromiseFactory<Result3>,
		PromiseFactory<Result4>,
		PromiseFactory<Result5>,
		PromiseFactory<Result6>,
		PromiseFactory<Result7>,
		PromiseFactory<Result8>,
		PromiseFactory<Result9>,
		PromiseFactory<Result10>
	],
	options?: Options
): Promise<
	[
		Result1,
		Result2,
		Result3,
		Result4,
		Result5,
		Result6,
		Result7,
		Result8,
		Result9,
		Result10
	]
>;
declare function pAll<
	Result1,
	Result2,
	Result3,
	Result4,
	Result5,
	Result6,
	Result7,
	Result8,
	Result9
>(
	tasks: [
		PromiseFactory<Result1>,
		PromiseFactory<Result2>,
		PromiseFactory<Result3>,
		PromiseFactory<Result4>,
		PromiseFactory<Result5>,
		PromiseFactory<Result6>,
		PromiseFactory<Result7>,
		PromiseFactory<Result8>,
		PromiseFactory<Result9>
	],
	options?: Options
): Promise<
	[
		Result1,
		Result2,
		Result3,
		Result4,
		Result5,
		Result6,
		Result7,
		Result8,
		Result9
	]
>;
declare function pAll<
	Result1,
	Result2,
	Result3,
	Result4,
	Result5,
	Result6,
	Result7,
	Result8
>(
	tasks: [
		PromiseFactory<Result1>,
		PromiseFactory<Result2>,
		PromiseFactory<Result3>,
		PromiseFactory<Result4>,
		PromiseFactory<Result5>,
		PromiseFactory<Result6>,
		PromiseFactory<Result7>,
		PromiseFactory<Result8>
	],
	options?: Options
): Promise<
	[Result1, Result2, Result3, Result4, Result5, Result6, Result7, Result8]
>;
declare function pAll<
	Result1,
	Result2,
	Result3,
	Result4,
	Result5,
	Result6,
	Result7
>(
	tasks: [
		PromiseFactory<Result1>,
		PromiseFactory<Result2>,
		PromiseFactory<Result3>,
		PromiseFactory<Result4>,
		PromiseFactory<Result5>,
		PromiseFactory<Result6>,
		PromiseFactory<Result7>
	],
	options?: Options
): Promise<[Result1, Result2, Result3, Result4, Result5, Result6, Result7]>;
declare function pAll<Result1, Result2, Result3, Result4, Result5, Result6>(
	tasks: [
		PromiseFactory<Result1>,
		PromiseFactory<Result2>,
		PromiseFactory<Result3>,
		PromiseFactory<Result4>,
		PromiseFactory<Result5>,
		PromiseFactory<Result6>
	],
	options?: Options
): Promise<[Result1, Result2, Result3, Result4, Result5, Result6]>;
declare function pAll<Result1, Result2, Result3, Result4, Result5>(
	tasks: [
		PromiseFactory<Result1>,
		PromiseFactory<Result2>,
		PromiseFactory<Result3>,
		PromiseFactory<Result4>,
		PromiseFactory<Result5>
	],
	options?: Options
): Promise<[Result1, Result2, Result3, Result4, Result5]>;
declare function pAll<Result1, Result2, Result3, Result4>(
	tasks: [
		PromiseFactory<Result1>,
		PromiseFactory<Result2>,
		PromiseFactory<Result3>,
		PromiseFactory<Result4>
	],
	options?: Options
): Promise<[Result1, Result2, Result3, Result4]>;
declare function pAll<Result1, Result2, Result3>(
	tasks: [
		PromiseFactory<Result1>,
		PromiseFactory<Result2>,
		PromiseFactory<Result3>
	],
	options?: Options
): Promise<[Result1, Result2, Result3]>;
declare function pAll<Result1, Result2>(
	tasks: [PromiseFactory<Result1>, PromiseFactory<Result2>],
	options?: Options
): Promise<[Result1, Result2]>;
declare function pAll<Result1>(
	tasks: [PromiseFactory<Result1>],
	options?: Options
): Promise<[Result1]>;
declare function pAll<TAll>(
	tasks: Iterable<PromiseFactory<TAll>> | PromiseFactory<TAll>[],
	options?: Options
): Promise<TAll[]>;

export default pAll;

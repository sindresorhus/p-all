import {type Options} from 'p-map';

type PromiseFactory<T> = () => PromiseLike<T>;

/**
Run promise-returning & async functions concurrently with optional limited concurrency.

@param tasks - Iterable with promise-returning/async functions.
@returns A `Promise` that is fulfilled when all promises returned from calling the functions in `tasks` are fulfilled, or rejects if any of the promises reject. The fulfilled value is an `Array` of the fulfilled values in `tasks` order.

@example
```
import pAll from 'p-all';
import got from 'got';

const actions = [
	() => got('https://sindresorhus.com'),
	() => got('https://avajs.dev'),
	() => checkSomething(),
	() => doSomethingElse()
];

console.log(await pAll(actions, {concurrency: 2}));
```
*/
export default function pAll<Task extends Array<PromiseFactory<unknown>>>(
	tasks: readonly [...Task],
	options?: Options,
): Promise<{
	[P in keyof Task]: Task[P] extends () => unknown ? Awaited<ReturnType<Task[P]>> : Task[P]
}>;

export {type Options} from 'p-map';

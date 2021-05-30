declare namespace pAll {
	type Options = import('p-map').Options;

	type PromiseFactory<T> = () => PromiseLike<T>;

	// From: https://github.com/microsoft/TypeScript/blob/4f5b3299fee9a54b692aba9df7a9e894bd86e81d/src/lib/es2015.promise.d.ts#L1
	type Awaited<T> = T extends undefined ? T : T extends PromiseLike<infer U> ? U : T;
}

// TODO: Refactor the whole definition back to multiple overloaded functions
/**
Run promise-returning & async functions concurrently with optional limited concurrency.

@param tasks - Iterable with promise-returning/async functions.
@returns A `Promise` that is fulfilled when all promises returned from calling the functions in `tasks` are fulfilled, or rejects if any of the promises reject. The fulfilled value is an `Array` of the fulfilled values in `tasks` order.

@example
```
import pAll = require('p-all');
import got = require('got');

(async () => {
	const actions = [
		() => got('https://sindresorhus.com'),
		() => got('https://ava.li'),
		() => checkSomething(),
		() => doSomethingElse()
	];

	console.log(await pAll(actions, {concurrency: 2}));
})();
```
*/
declare const pAll: <Task extends Array<pAll.PromiseFactory<unknown>>>(
	tasks: readonly [...Task],
	options?: pAll.Options,
) => Promise<{ [P in keyof Task]: Task[P] extends () => unknown ? pAll.Awaited<ReturnType<Task[P]>> : Task[P] }>;

export = pAll;

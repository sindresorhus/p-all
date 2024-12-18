import {expectType} from 'tsd';
import pAll from './index.js';

const actions: [
	() => Promise<string>,
	() => Promise<string>,
	() => Promise<void>,
	() => Promise<number>,
] = [
	async () => 'https://sindresorhus.com',
	async () => 'https://avajs.dev',
	async () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
	async () => 1,
];

const result = await pAll(actions, {concurrency: 2});

expectType<string>(result[0]);
expectType<string>(result[1]);
expectType<void>(result[2]);
expectType<number>(result[3]);

{
	const numbers1 = [1, 2];

	const result1 = await pAll(numbers1.map(
		n => async () =>
			Promise.resolve().then(() => ({
				n,
			}))), {concurrency: 2});

	expectType<{n: number}>(result1[0]);
	expectType<{n: number}>(result1[1]);
}

{
	const numbers2 = [1, 2];

	const actions2 = numbers2.map(
		n => async () =>
			Promise.resolve().then(() => ({
				n,
			})));

	const result2 = await pAll(actions2, {concurrency: 2});

	expectType<{n: number}>(result2[0]);
	expectType<{n: number}>(result2[1]);
}

// Doesn't work: https://github.com/sindresorhus/p-all/issues/15
// {
// 	const numbers3 = [1, 2];
// 	const result3 = await pAll(numbers3.map(
// 		n => () =>
// 			Promise.resolve().then(() => ({
// 				n,
// 			}))), {concurrency: 2});

// 	expectType<{n: number}>(result3[0]);
// 	expectType<{n: number}>(result3[1]);
// }

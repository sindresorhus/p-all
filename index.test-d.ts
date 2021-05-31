import {expectType} from 'tsd';
import pAll from './index.js';

const actions: [
	() => Promise<string>,
	() => Promise<string>,
	() => Promise<void>,
	() => Promise<number>
] = [
	async () => Promise.resolve('https://sindresorhus.com'),
	async () => Promise.resolve('https://avajs.dev'),
	async () => Promise.resolve(),
	async () => Promise.resolve(1)
];

const result = await pAll(actions, {concurrency: 2});

expectType<string>(result[0]);
expectType<string>(result[1]);
expectType<void>(result[2]);
expectType<number>(result[3]);

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

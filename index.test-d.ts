import {expectType} from 'tsd';
import pAll = require('.');

const actions: [
	() => Promise<string>,
	() => Promise<string>,
	() => Promise<void>,
	() => Promise<number>
] = [
	() => Promise.resolve('https://sindresorhus.com'),
	() => Promise.resolve('https://ava.li'),
	() => Promise.resolve(),
	() => Promise.resolve(1)
];

const result = await pAll(actions, {concurrency: 2});

expectType<string>(result[0]);
expectType<string>(result[1]);
expectType<void>(result[2]);
expectType<number>(result[3]);

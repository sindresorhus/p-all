import test from 'ava';
import delay from 'delay';
import m from '.';

// See `p-map` for more comprehensive tests
test('main', async t => {
	const input = [
		async () => 1,
		() => delay(100).then(() => 2),
		() => 3,
		async () => 4
	];

	t.deepEqual(await m(input), [1, 2, 3, 4]);
});

test('handles empty iterable', async t => {
	t.deepEqual(await m([]), []);
});

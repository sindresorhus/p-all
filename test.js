import test from 'ava';
import delay from 'delay';
import pAll from '.';

// See `p-map` for more comprehensive tests
test('main', async t => {
	const input = [
		async () => 1,
		async () => {
			await delay(100);
			return 2;
		},
		() => 3,
		async () => 4
	];

	t.deepEqual(await pAll(input), [1, 2, 3, 4]);
});

test('handles empty iterable', async t => {
	t.deepEqual(await pAll([]), []);
});

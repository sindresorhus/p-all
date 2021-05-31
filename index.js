import pMap from 'p-map';

export default async function pAll(iterable, options) {
	return pMap(iterable, element => element(), options);
}

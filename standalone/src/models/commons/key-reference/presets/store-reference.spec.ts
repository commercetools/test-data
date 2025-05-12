import type { TKeyReference } from '../types';
import storeReference from './store-reference';

it('should build store reference', () => {
  const built = storeReference().build<TKeyReference>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'store',
  });
});

import type { TReference } from '../types';
import empty from './empty';

it('should set relevant fields to undefined', () => {
  const reference = empty().build<TReference>();
  expect(reference).toMatchObject({
    id: undefined,
    key: undefined,
  });
});

import type { TReference } from '../../types';
import storeReference from './store-reference';

it('should build a store reference', () => {
  const built = storeReference().build<TReference<'store'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'store',
  });
});

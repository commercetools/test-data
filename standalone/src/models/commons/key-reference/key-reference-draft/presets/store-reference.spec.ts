import type { TKeyReferenceDraft } from '../../types';
import storeReference from './store-reference';

it('should build store reference', () => {
  const built = storeReference().build<TKeyReferenceDraft>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'store',
  });
});

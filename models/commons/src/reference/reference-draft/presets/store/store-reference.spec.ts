import type { TReferenceDraft } from '../../../types';
import storeReference from './store-reference';

it('should build a store reference', () => {
  const built = storeReference().build<TReferenceDraft<'store'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'store',
  });
});

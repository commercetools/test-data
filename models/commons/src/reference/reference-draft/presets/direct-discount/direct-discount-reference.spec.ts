import type { TReferenceDraft } from '../../../types';
import directDiscountReference from './direct-discount-reference';

it('should build a direct-discount reference', () => {
  const built =
    directDiscountReference().build<TReferenceDraft<'direct-discount'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'direct-discount',
  });
});

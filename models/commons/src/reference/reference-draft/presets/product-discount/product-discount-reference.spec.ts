import type { TReferenceDraft } from '../../../types';
import productDiscountReference from './product-discount-reference';

it('should build a product-discount reference', () => {
  const built =
    productDiscountReference().build<TReferenceDraft<'product-discount'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'product-discount',
  });
});

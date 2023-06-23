import type { TReference } from '../../types';
import productDiscountReference from './product-discount-reference';

it('should build a product-discount reference', () => {
  const built =
    productDiscountReference().build<TReference<'product-discount'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'product-discount',
  });
});

import type { TReferenceDraft } from '../../../types';
import cartDiscountReference from './cart-discount-reference';

it('should build a cart-discount reference', () => {
  const built =
    cartDiscountReference().build<TReferenceDraft<'cart-discount'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'cart-discount',
  });
});

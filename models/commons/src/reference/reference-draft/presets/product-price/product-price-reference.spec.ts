import type { TReferenceDraft } from '../../../types';
import productPriceReference from './product-price-reference';

it('should build a product-price reference', () => {
  const built =
    productPriceReference().build<TReferenceDraft<'product-price'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'product-price',
  });
});

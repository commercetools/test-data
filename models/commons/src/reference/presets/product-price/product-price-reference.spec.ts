import type { TReference } from '../../types';
import productPriceReference from './product-price-reference';

it('should build a product-price reference', () => {
  const built = productPriceReference().build<TReference<'product-price'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'product-price',
  });
});

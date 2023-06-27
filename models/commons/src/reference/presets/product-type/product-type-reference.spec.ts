import type { TReference } from '../../types';
import productTypeReference from './product-type-reference';

it('should build a product-type reference', () => {
  const built = productTypeReference().build<TReference<'product-type'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'product-type',
  });
});

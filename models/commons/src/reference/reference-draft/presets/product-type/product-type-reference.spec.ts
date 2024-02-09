import type { TReferenceDraft } from '../../../types';
import productTypeReference from './product-type-reference';

it('should build a product-type reference', () => {
  const built = productTypeReference().build<TReferenceDraft<'product-type'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'product-type',
  });
});

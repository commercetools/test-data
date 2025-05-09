import type { TKeyReferenceDraft } from '../../types';
import productTypeReference from './product-type-reference';

it('should build product type reference', () => {
  const built = productTypeReference().build<TKeyReferenceDraft>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'product-type',
  });
});

import type { TReferenceDraft } from '../../../types';
import productReference from './product-reference';

it('should build a product reference', () => {
  const built = productReference().build<TReferenceDraft<'product'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'product',
  });
});

import type { TReferenceDraft } from '../../../types';
import productSelectionReference from './product-selection-reference';

it('should build a product-selection reference', () => {
  const built =
    productSelectionReference().build<TReferenceDraft<'product-selection'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'product-selection',
  });
});

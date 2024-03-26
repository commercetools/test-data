import type { TKeyReferenceDraft } from '../../types';
import productSelectionReference from './product-selection-reference';

it('should build product type reference', () => {
  const built = productSelectionReference().build<TKeyReferenceDraft>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'product-selection',
  });
});

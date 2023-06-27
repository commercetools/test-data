import type { TReference } from '../../types';
import productSelectionReference from './product-selection-reference';

it('should build a product-selection reference', () => {
  const built =
    productSelectionReference().build<TReference<'product-selection'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'product-selection',
  });
});

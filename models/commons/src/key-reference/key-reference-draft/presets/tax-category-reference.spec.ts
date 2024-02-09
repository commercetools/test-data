import type { TKeyReferenceDraft } from '../../types';
import taxCategoryReference from './tax-category-reference';

it('should build category reference', () => {
  const built = taxCategoryReference().build<TKeyReferenceDraft>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'tax-category',
  });
});

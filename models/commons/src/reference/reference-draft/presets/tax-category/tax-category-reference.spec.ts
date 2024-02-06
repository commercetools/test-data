import type { TReferenceDraft } from '../../../types';
import taxCategoryReference from './tax-category-reference';

it('should build a tax-category reference', () => {
  const built = taxCategoryReference().build<TReferenceDraft<'tax-category'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'tax-category',
  });
});

import type { TReference } from '../../types';
import taxCategoryReference from './tax-category-reference';

it('should build a tax-category reference', () => {
  const built = taxCategoryReference().build<TReference<'tax-category'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'tax-category',
  });
});

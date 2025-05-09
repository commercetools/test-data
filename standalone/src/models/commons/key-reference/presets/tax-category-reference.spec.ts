import type { TKeyReference } from '../types';
import taxCategoryReference from './tax-category-reference';

it('should build category reference', () => {
  const built = taxCategoryReference().build<TKeyReference>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'tax-category',
  });
});

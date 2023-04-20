import type { TKeyReference } from '../types';
import categoryReference from './category-reference';

it('should build category reference', () => {
  const built = categoryReference().build<TKeyReference>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'category',
  });
});

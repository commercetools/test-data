import type { TReference } from '../types';

import categoryReference from './category-reference';

it('should build category reference', () => {
  const built = categoryReference().build<TReference>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'category',
  });
});

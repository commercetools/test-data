import type { TKeyReferenceDraft } from '../../types';
import categoryReference from './category-reference';

it('should build category reference', () => {
  const built = categoryReference().build<TKeyReferenceDraft>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'category',
  });
});

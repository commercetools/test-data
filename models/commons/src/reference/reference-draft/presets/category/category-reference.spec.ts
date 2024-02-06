import type { TReferenceDraft } from '../../../types';
import categoryReference from './category-reference';

it('should build a category reference', () => {
  const built = categoryReference().build<TReferenceDraft<'category'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'category',
  });
});

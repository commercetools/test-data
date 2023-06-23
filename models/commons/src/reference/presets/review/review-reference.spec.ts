import type { TReference } from '../../types';
import reviewReference from './review-reference';

it('should build a review reference', () => {
  const built = reviewReference().build<TReference<'review'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'review',
  });
});

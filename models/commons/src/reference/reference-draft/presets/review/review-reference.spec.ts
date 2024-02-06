import type { TReferenceDraft } from '../../../types';
import reviewReference from './review-reference';

it('should build a review reference', () => {
  const built = reviewReference().build<TReferenceDraft<'review'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'review',
  });
});

import { TReviewDraft } from '../../../types';
import withRatingGreaterThanOne from './with-ranking-greater-than-one';

describe('ReviewDraft with a ranking preset of greater than 1', () => {
  it('should return a ranking between 2 & 100', () => {
    const ratingGreaterThanOne =
      withRatingGreaterThanOne().build<TReviewDraft>();

    expect(ratingGreaterThanOne).toEqual(
      expect.objectContaining({
        rating: expect.any(Number),
      })
    );
    expect(ratingGreaterThanOne.rating).toBeGreaterThanOrEqual(2);
    expect(ratingGreaterThanOne.rating).toBeLessThanOrEqual(100);
  });
});

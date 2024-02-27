import type { TReviewDraftBuilder } from '../../../types';
import * as ReviewDraft from '../../index';

function ratingGreaterThanOne() {
  return Math.floor(Math.random() * 99) + 2;
}

const withRatingGreaterThanOne = (): TReviewDraftBuilder =>
  ReviewDraft.random().rating(ratingGreaterThanOne());

export default withRatingGreaterThanOne;

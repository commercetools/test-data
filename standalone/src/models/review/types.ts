import type { Review, ReviewDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../core';

export type TReview = Review;
export type TReviewDraft = ReviewDraft;

export type TReviewGraphql = TReview & {
  __typename: 'Review';
};
export type TReviewDraftGraphql = TReviewDraft;

export type TReviewBuilder = TBuilder<TReview>;
export type TReviewDraftBuilder = TBuilder<TReviewDraft>;
export type TCreateReviewBuilder = () => TReviewBuilder;
export type TCreateReviewDraftBuilder = () => TReviewDraftBuilder;

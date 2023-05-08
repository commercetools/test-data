# @commercetools-test-data/review

This package provides the data model for the commercetools platform `Review` type

https://docs.commercetools.com/api/projects/reviews#review

# Install

```bash
$ pnpm add -D @commercetools-test-data/review
```

# Usage

```ts
import {
  Review,
  ReviewDraft,
  type TReview,
  type TReviewDraft,
} from '@commercetools-test-data/review';

const review = Review.random().build<TReview>();
const reviewDraft = ReviewDraft.random().build<TReviewDraft>();
```

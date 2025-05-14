/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@/core/test-utils';
import type { TReview, TReviewGraphql } from './types';
import * as Review from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TReview, TReview>(
      'default',
      Review.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        uniquenessValue: null,
        locale: expect.any(String),
        authorName: expect.any(String),
        title: expect.any(String),
        text: expect.any(String),
        target: null,
        includedInStatistics: expect.any(Boolean),
        rating: expect.any(Number),
        state: null,
        customer: null,
        custom: null,
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
      })
    )
  );
  it(
    ...createBuilderSpec<TReview, TReview>(
      'rest',
      Review.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        uniquenessValue: null,
        locale: expect.any(String),
        authorName: expect.any(String),
        title: expect.any(String),
        text: expect.any(String),
        target: null,
        includedInStatistics: expect.any(Boolean),
        rating: expect.any(Number),
        state: null,
        customer: null,
        custom: null,
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TReview, TReviewGraphql>(
      'graphql',
      Review.random(),
      expect.objectContaining({
        __typename: 'Review',
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        uniquenessValue: null,
        locale: expect.any(String),
        authorName: expect.any(String),
        title: expect.any(String),
        text: expect.any(String),
        target: null,
        includedInStatistics: expect.any(Boolean),
        rating: expect.any(Number),
        state: null,
        customer: null,
        custom: null,
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
      })
    )
  );
});

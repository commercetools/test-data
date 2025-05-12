/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '../../../core/test-utils';
import type { TReviewDraft, TReviewDraftGraphql } from '../types';
import * as ReviewDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TReviewDraft, TReviewDraft>(
      'default',
      ReviewDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        uniquenessValue: null,
        locale: expect.any(String),
        authorName: expect.any(String),
        title: expect.any(String),
        text: expect.any(String),
        target: null,
        state: null,
        rating: expect.any(Number),
        customer: null,
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TReviewDraft, TReviewDraft>(
      'rest',
      ReviewDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        uniquenessValue: null,
        locale: expect.any(String),
        authorName: expect.any(String),
        title: expect.any(String),
        text: expect.any(String),
        target: null,
        state: null,
        rating: expect.any(Number),
        customer: null,
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TReviewDraft, TReviewDraftGraphql>(
      'graphql',
      ReviewDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        uniquenessValue: null,
        locale: expect.any(String),
        authorName: expect.any(String),
        title: expect.any(String),
        text: expect.any(String),
        target: null,
        state: null,
        rating: expect.any(Number),
        customer: null,
        custom: null,
      })
    )
  );
});

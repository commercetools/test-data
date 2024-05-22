/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TImageRegexDraft, TImageRegexDraftGraphql } from './types';
import * as ImageRegexDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TImageRegexDraft, TImageRegexDraft>(
      'default',
      ImageRegexDraft.random(),
      expect.objectContaining({
        small: expect.objectContaining({
          flag: expect.any(String),
          replace: expect.any(String),
          search: expect.any(String),
        }),
        thumb: expect.objectContaining({
          flag: expect.any(String),
          replace: expect.any(String),
          search: expect.any(String),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TImageRegexDraft, TImageRegexDraftGraphql>(
      'graphql',
      ImageRegexDraft.random(),
      expect.objectContaining({
        small: expect.objectContaining({
          flag: expect.any(String),
          replace: expect.any(String),
          search: expect.any(String),
        }),
        thumb: expect.objectContaining({
          flag: expect.any(String),
          replace: expect.any(String),
          search: expect.any(String),
        }),
      })
    )
  );
});

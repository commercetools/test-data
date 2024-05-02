/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TImageRegex, TImageRegexGraphql } from './types';
import * as ProjectExtension from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TImageRegex, TImageRegex>(
      'default',
      ProjectExtension.random(),
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
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
    ...createBuilderSpec<TImageRegex, TImageRegexGraphql>(
      'graphql',
      ProjectExtension.random(),
      expect.objectContaining({
        __typename: 'ImageRegex',
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
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

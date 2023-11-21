/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TStagedQuoteDraft, TStagedQuoteDraftGraphql } from '../types';

import * as StagedQuoteDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TStagedQuoteDraft, TStagedQuoteDraft>(
      'default',
      StagedQuoteDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        quoteRequest: expect.objectContaining({
          id: expect.any(String),
        }),
        quoteRequestVersion: expect.any(Number),
        quoteRequestStateToAccepted: undefined,
        state: undefined,
        custom: undefined,
      })
    )
  );
  it(
    ...createBuilderSpec<TStagedQuoteDraft, TStagedQuoteDraft>(
      'rest',
      StagedQuoteDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        quoteRequest: expect.objectContaining({
          id: expect.any(String),
        }),
        quoteRequestVersion: expect.any(Number),
        quoteRequestStateToAccepted: undefined,
        state: undefined,
        custom: undefined,
      })
    )
  );
  it(
    ...createBuilderSpec<TStagedQuoteDraft, TStagedQuoteDraftGraphql>(
      'graphql',
      StagedQuoteDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        quoteRequest: expect.objectContaining({
          id: expect.any(String),
        }),
        quoteRequestVersion: expect.any(Number),
        quoteRequestStateToAccepted: undefined,
        state: undefined,
        custom: undefined,
      })
    )
  );
});

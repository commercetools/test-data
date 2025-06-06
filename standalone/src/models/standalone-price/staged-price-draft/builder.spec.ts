/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TStagedPriceDraft, TStagedPriceDraftGraphql } from './types';
import * as StagedPriceDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TStagedPriceDraft, TStagedPriceDraft>(
      'default',
      StagedPriceDraft.random(),
      expect.objectContaining({
        value: expect.objectContaining({
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TStagedPriceDraft, TStagedPriceDraft>(
      'rest',
      StagedPriceDraft.random(),
      expect.objectContaining({
        value: expect.objectContaining({
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TStagedPriceDraft, TStagedPriceDraftGraphql>(
      'graphql',
      StagedPriceDraft.random(),
      expect.objectContaining({
        value: expect.objectContaining({
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
        }),
      })
    )
  );
});

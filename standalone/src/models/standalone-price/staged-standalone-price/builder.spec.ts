/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TStagedStandalonePrice, TStagedStandalonePriceGraphql } from './types';
import * as StagedStandalonePrice from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TStagedStandalonePrice, TStagedStandalonePrice>(
      'default',
      StagedStandalonePrice.random(),
      expect.objectContaining({
        value: expect.objectContaining({
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TStagedStandalonePrice, TStagedStandalonePrice>(
      'rest',
      StagedStandalonePrice.random(),
      expect.objectContaining({
        value: expect.objectContaining({
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TStagedStandalonePrice, TStagedStandalonePriceGraphql>(
      'graphql',
      StagedStandalonePrice.random(),
      expect.objectContaining({
        value: expect.objectContaining({
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
        }),
      })
    )
  );
});

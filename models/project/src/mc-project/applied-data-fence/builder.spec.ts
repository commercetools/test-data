/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TAppliedDataFence, TAppliedDataFenceGraphql } from './types';
import * as AppliedDataFence from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAppliedDataFence, TAppliedDataFence>(
      'default',
      AppliedDataFence.random(),
      expect.objectContaining({
        type: 'Store',
        group: expect.any(String),
        name: expect.any(String),
        value: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TAppliedDataFence, TAppliedDataFence>(
      'rest',
      AppliedDataFence.random(),
      expect.objectContaining({
        type: 'Store',
        group: expect.any(String),
        name: expect.any(String),
        value: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TAppliedDataFence, TAppliedDataFenceGraphql>(
      'graphql',
      AppliedDataFence.random(),
      expect.objectContaining({
        __typename: 'AppliedDataFence',
        type: 'Store',
        group: expect.any(String),
        name: expect.any(String),
        value: expect.any(String),
      })
    )
  );
});

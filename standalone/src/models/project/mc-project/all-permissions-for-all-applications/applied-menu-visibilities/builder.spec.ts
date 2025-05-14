/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import {
  TAppliedMenuVisibilities,
  TAppliedMenuVisibilitiesGraphql,
} from './types';
import * as AppliedMenuVisibilities from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAppliedMenuVisibilities, TAppliedMenuVisibilities>(
      'default',
      AppliedMenuVisibilities.random(),
      expect.objectContaining({
        name: expect.any(String),
        value: expect.any(Boolean),
      })
    )
  );

  it(
    ...createBuilderSpec<TAppliedMenuVisibilities, TAppliedMenuVisibilities>(
      'rest',
      AppliedMenuVisibilities.random(),
      expect.objectContaining({
        name: expect.any(String),
        value: expect.any(Boolean),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TAppliedMenuVisibilities,
      TAppliedMenuVisibilitiesGraphql
    >(
      'graphql',
      AppliedMenuVisibilities.random(),
      expect.objectContaining({
        __typename: 'AppliedMenuVisibilities',
        name: expect.any(String),
        value: expect.any(Boolean),
      })
    )
  );
});

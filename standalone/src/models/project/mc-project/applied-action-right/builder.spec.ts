/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../../core/test-utils';
import { TAppliedActionRight, TAppliedActionRightGraphql } from './types';
import * as AppliedActionRight from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAppliedActionRight, TAppliedActionRight>(
      'default',
      AppliedActionRight.random(),
      expect.objectContaining({
        group: expect.any(String),
        name: expect.any(String),
        value: expect.any(Boolean),
      })
    )
  );

  it(
    ...createBuilderSpec<TAppliedActionRight, TAppliedActionRight>(
      'rest',
      AppliedActionRight.random(),
      expect.objectContaining({
        group: expect.any(String),
        name: expect.any(String),
        value: expect.any(Boolean),
      })
    )
  );

  it(
    ...createBuilderSpec<TAppliedActionRight, TAppliedActionRightGraphql>(
      'graphql',
      AppliedActionRight.random(),
      expect.objectContaining({
        __typename: 'AppliedActionRight',
        group: expect.any(String),
        name: expect.any(String),
        value: expect.any(Boolean),
      })
    )
  );
});

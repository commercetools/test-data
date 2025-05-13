/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TLimitWithCurrent } from './types';
import * as LimitWithCurrent from './index';

describe('building', () => {
  it(
    ...createBuilderSpec<TLimitWithCurrent, TLimitWithCurrent>(
      'default',
      LimitWithCurrent.random(),
      expect.objectContaining({
        limit: expect.any(Number),
        current: expect.any(Number),
      })
    )
  );
  it(
    ...createBuilderSpec<TLimitWithCurrent, TLimitWithCurrent>(
      'graphql',
      LimitWithCurrent.random(),
      expect.objectContaining({
        limit: expect.any(Number),
        current: expect.any(Number),
        __typename: 'LimitWithCurrent',
      })
    )
  );
});

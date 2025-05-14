/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TLimit } from './types';
import * as Limit from './index';

describe('building', () => {
  it(
    ...createBuilderSpec<TLimit, TLimit>(
      'default',
      Limit.random(),
      expect.objectContaining({
        limit: expect.any(Number),
      })
    )
  );
  it(
    ...createBuilderSpec<TLimit, TLimit>(
      'graphql',
      Limit.random(),
      expect.objectContaining({
        limit: expect.any(Number),
        __typename: 'Limit',
      })
    )
  );
});

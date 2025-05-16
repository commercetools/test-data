/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../../../core/test-utils';
import type { TContactInformation } from './types';
import * as ContactInformation from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TContactInformation, TContactInformation>(
      'default',
      ContactInformation.random(),
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        email: expect.any(String),
        verifiedEmail: expect.any(String),
      })
    )
  );
  it(
    ...createBuilderSpec<TContactInformation, TContactInformation>(
      'graphql',
      ContactInformation.random(),
      expect.objectContaining({
        __typename: 'ContactInformation',
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        email: expect.any(String),
        verifiedEmail: expect.any(String),
      })
    )
  );
});

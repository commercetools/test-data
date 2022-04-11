/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TClientLogging, TClientLoggingGraphql } from './types';
import * as ClientLogging from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TClientLogging, TClientLoggingGraphql>(
      'default',
      ClientLogging.random(),
      expect.objectContaining({
        externalUserId: expect.any(String),
        anonymousId: expect.any(String),
        clientId: expect.any(String),
        customer: expect.objectContaining({
          id: expect.any(String),
          typeId: 'customer',
        }),
      })
    )
  );
  it(
    ...createBuilderSpec<TClientLogging, TClientLoggingGraphql>(
      'rest',
      ClientLogging.random(),
      expect.objectContaining({
        externalUserId: expect.any(String),
        anonymousId: expect.any(String),
        clientId: expect.any(String),
        customer: expect.objectContaining({
          id: expect.any(String),
          typeId: 'customer',
        }),
      })
    )
  );
  it(
    ...createBuilderSpec<TClientLogging, TClientLoggingGraphql>(
      'graphql',
      ClientLogging.random(),
      expect.objectContaining({
        __typename: 'Initiator',
        isPlatformClient: expect.any(Boolean),
        externalUserId: expect.any(String),
        anonymousId: expect.any(String),
        clientId: expect.any(String),
        customerRef: expect.objectContaining({
          id: expect.any(String),
          typeId: 'customer',
        }),
        userRef: expect.objectContaining({
          id: expect.any(String),
          typeId: 'user',
        }),
      })
    )
  );
});

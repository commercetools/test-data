/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TMessagesConfiguration, TMessagesConfigurationGraphql } from './types';
import * as MessagesConfiguration from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TMessagesConfiguration, TMessagesConfiguration>(
      'default',
      MessagesConfiguration.random(),
      expect.objectContaining({
        enabled: false,
        deleteDaysAfterCreation: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TMessagesConfiguration, TMessagesConfiguration>(
      'rest',
      MessagesConfiguration.random().enabled(true).deleteDaysAfterCreation(10),
      expect.objectContaining({
        enabled: true,
        deleteDaysAfterCreation: 10,
      })
    )
  );

  it(
    ...createBuilderSpec<TMessagesConfiguration, TMessagesConfigurationGraphql>(
      'graphql',
      MessagesConfiguration.random(),
      expect.objectContaining({
        __typename: 'MessagesConfiguration',
        enabled: false,
        deleteDaysAfterCreation: null,
      })
    )
  );
});

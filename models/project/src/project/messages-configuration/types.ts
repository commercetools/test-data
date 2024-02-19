import type { MessagesConfiguration } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TMessagesConfiguration = MessagesConfiguration;

export type TMessagesConfigurationGraphql = TMessagesConfiguration & {
  __typename: 'MessagesConfiguration';
};

export type TMessagesConfigurationBuilder = TBuilder<TMessagesConfiguration>;
export type TCreateMessagesConfigurationBuilder =
  () => TMessagesConfigurationBuilder;

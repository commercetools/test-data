import type { MessagesConfiguration } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../../core';

export type TMessagesConfiguration = MessagesConfiguration;

export type TMessagesConfigurationGraphql = TMessagesConfiguration & {
  __typename: 'MessagesConfiguration';
};

export type TMessagesConfigurationBuilder = TBuilder<TMessagesConfiguration>;
export type TCreateMessagesConfigurationBuilder =
  () => TMessagesConfigurationBuilder;

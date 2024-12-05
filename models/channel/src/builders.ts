import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateChannelBuilder,
  TChannelGraphql,
  TChannelRest,
} from './types';

export const RestModelBuilder: TCreateChannelBuilder<TChannelRest> = () =>
  createSpecializedBuilder({
    name: 'ChannelRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateChannelBuilder<TChannelGraphql> = () =>
  createSpecializedBuilder({
    name: 'ChannelGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatChannelModelBuilder = <
  TChannelModel extends TChannelRest | TChannelGraphql = TChannelRest,
>() =>
  createCompatibilityBuilder<TChannelModel>({
    name: 'ChannelCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TChannelModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TChannelModel>,
    },
  });

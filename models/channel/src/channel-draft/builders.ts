import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@commercetools-test-data/core';
import type {
  TCreateChannelBuilder,
  TChannelDraftGraphql,
  TChannelDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateChannelBuilder<TChannelDraftRest> = () =>
  createSpecializedBuilder({
    name: 'ChannelDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateChannelBuilder<
  TChannelDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ChannelDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatChannelModelBuilder = <
  TChannelModel extends
    | TChannelDraftRest
    | TChannelDraftGraphql = TChannelDraftRest,
>() =>
  createCompatibilityBuilder<TChannelModel>({
    name: 'ChannelDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TChannelModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TChannelModel>,
    },
  });

import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateItemStateBuilder,
  TItemStateGraphql,
  TItemStateRest,
} from './types';

export const RestModelBuilder: TCreateItemStateBuilder<TItemStateRest> = () =>
  createSpecializedBuilder({
    name: 'ItemStateRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateItemStateBuilder<
  TItemStateGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ItemStateGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

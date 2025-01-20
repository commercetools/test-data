import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@commercetools-test-data/core';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';
import type { TCartGraphql, TCartRest, TCreateCartBuilder } from './types';

export const RestModelBuilder: TCreateCartBuilder<TCartRest> = () =>
  createSpecializedBuilder({
    name: 'CartRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateCartBuilder<TCartGraphql> = () =>
  createSpecializedBuilder({
    name: 'CartGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatCartModelBuilder = <
  TCartModel extends TCartRest | TCartGraphql = TCartRest,
>() =>
  createCompatibilityBuilder<TCartModel>({
    name: 'CartCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCartModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TCartModel>,
    },
  });

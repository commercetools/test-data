import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';
import type { TOrderGraphql, TOrderRest, TCreateOrderBuilder } from './types';

export const RestModelBuilder: TCreateOrderBuilder<TOrderRest> = () =>
  createSpecializedBuilder({
    name: 'OrderRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateOrderBuilder<TOrderGraphql> = () =>
  createSpecializedBuilder({
    name: 'OrderGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatOrderModelBuilder = <
  TOrderModel extends TOrderRest | TOrderGraphql = TOrderRest,
>() =>
  createCompatibilityBuilder<TOrderModel>({
    name: 'OrderCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TOrderModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TOrderModel>,
    },
  });

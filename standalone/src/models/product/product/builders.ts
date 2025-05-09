import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '../../../core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateProductBuilder,
  TProductGraphql,
  TProductRest,
} from './types';

export const RestModelBuilder: TCreateProductBuilder<TProductRest> = () =>
  createSpecializedBuilder({
    name: 'ProductRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateProductBuilder<TProductGraphql> = () =>
  createSpecializedBuilder({
    name: 'ProductGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatProductModelBuilder = <
  TProductModel extends TProductRest | TProductGraphql = TProductRest,
>() =>
  createCompatibilityBuilder<TProductModel>({
    name: 'ProductCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TProductModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TProductModel>,
    },
  });

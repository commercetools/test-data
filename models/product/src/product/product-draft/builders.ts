import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@commercetools-test-data/core';
import type {
  TCreateProductBuilder,
  TProductDraftGraphql,
  TProductDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateProductBuilder<TProductDraftRest> = () =>
  createSpecializedBuilder({
    name: 'ProductDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateProductBuilder<
  TProductDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ProductDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatProductModelBuilder = <
  TProductModel extends
    | TProductDraftRest
    | TProductDraftGraphql = TProductDraftRest,
>() =>
  createCompatibilityBuilder<TProductModel>({
    name: 'ProductDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TProductModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TProductModel>,
    },
  });

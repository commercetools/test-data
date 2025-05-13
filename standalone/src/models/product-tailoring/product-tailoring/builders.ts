import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateProductTailoringBuilder,
  TProductTailoringGraphql,
  TProductTailoringRest,
} from './types';

export const RestModelBuilder: TCreateProductTailoringBuilder<
  TProductTailoringRest
> = () =>
  createSpecializedBuilder({
    name: 'ProductTailoringRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateProductTailoringBuilder<
  TProductTailoringGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ProductTailoringGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

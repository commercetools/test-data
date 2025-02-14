import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateProductTailoringDataDraftBuilder,
  TProductTailoringDataDraftGraphql,
  TProductTailoringDataDraftRest,
} from './types';

export const RestModelBuilder: TCreateProductTailoringDataDraftBuilder<
  TProductTailoringDataDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'ProductTailoringDataDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateProductTailoringDataDraftBuilder<
  TProductTailoringDataDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ProductTailoringDataDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TCreatePimSearchListViewBuilder,
  TPimSearchListViewGraphql,
} from './types';

export const GraphqlModelBuilder: TCreatePimSearchListViewBuilder<
  TPimSearchListViewGraphql
> = () =>
  createSpecializedBuilder({
    name: 'PimSearchListViewGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

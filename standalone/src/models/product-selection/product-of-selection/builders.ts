import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TCreateProductOfSelectionBuilder,
  TProductOfSelectionGraphql,
} from './types';

export const GraphqlModelBuilder: TCreateProductOfSelectionBuilder<
  TProductOfSelectionGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ProductOfSelectionGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

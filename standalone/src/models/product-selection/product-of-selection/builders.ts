import { createSpecializedBuilder } from '@/core';
import type {
  TCreateProductSelectionBuilder,
  TProductOfSelectionGraphql,
} from '../types';
import { graphqlFieldsConfig } from './fields-config';

export const GraphqlModelBuilder: TCreateProductSelectionBuilder<
  TProductOfSelectionGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ProductOfSelectionGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

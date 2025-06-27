import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type { TCreateVariantPricesListViewBuilder } from './types';

export const GraphqlModelBuilder: TCreateVariantPricesListViewBuilder = () =>
  createSpecializedBuilder({
    name: 'VariantPricesListViewGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

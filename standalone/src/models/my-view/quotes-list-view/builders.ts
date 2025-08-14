import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type { TCreateQuotesListViewBuilder } from './types';

export const GraphqlModelBuilder: TCreateQuotesListViewBuilder = () =>
  createSpecializedBuilder({
    name: 'QuotesListViewGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

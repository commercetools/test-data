import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type { TCreateMyViewSortBuilder } from './types';

export const GraphqlModelBuilder: TCreateMyViewSortBuilder = () =>
  createSpecializedBuilder({
    name: 'MyViewSortGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

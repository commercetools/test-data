import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type { TCreateMyViewNestedTableBuilder } from './types';

export const GraphqlModelBuilder: TCreateMyViewNestedTableBuilder = () =>
  createSpecializedBuilder({
    name: 'MyViewNestedTableGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

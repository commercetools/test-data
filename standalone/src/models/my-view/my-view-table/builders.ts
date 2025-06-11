import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type { TCreateMyViewTableBuilder } from './types';

export const GraphqlModelBuilder: TCreateMyViewTableBuilder = () =>
  createSpecializedBuilder({
    name: 'MyViewTableGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

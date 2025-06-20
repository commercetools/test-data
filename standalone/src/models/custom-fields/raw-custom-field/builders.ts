import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type { TCreateRawCustomFieldBuilder } from './types';

export const GraphqlModelBuilder: TCreateRawCustomFieldBuilder = () =>
  createSpecializedBuilder({
    name: 'RawCustomFieldGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

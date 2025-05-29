import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TCustomApplicationGraphql,
  TCreateCustomApplicationBuilder,
} from './types';

export const GraphqlModelBuilder: TCreateCustomApplicationBuilder<
  TCustomApplicationGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CustomApplicationGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

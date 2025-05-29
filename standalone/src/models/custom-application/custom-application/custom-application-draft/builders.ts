import { createSpecializedBuilder } from '@/core';
import type {
  TCustomApplicationDraftGraphql,
  TCreateCustomApplicationBuilder,
} from '../types';
import { graphqlFieldsConfig } from './fields-config';

export const GraphqlModelBuilder: TCreateCustomApplicationBuilder<
  TCustomApplicationDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CustomApplicationDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

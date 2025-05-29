import { createSpecializedBuilder } from '@/core';
import type {
  TCustomApplicationPermissionDraftGraphql,
  TCreateCustomApplicationPermissionBuilder,
} from '../types';
import { graphqlFieldsConfig } from './fields-config';

export const GraphqlModelBuilder: TCreateCustomApplicationPermissionBuilder<
  TCustomApplicationPermissionDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CustomApplicationPermissionDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

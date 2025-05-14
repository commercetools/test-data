import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TCustomApplicationPermissionDraftGraphql,
  TCreateCustomApplicationPermissionDraftBuilder,
} from './types';

export const GraphqlModelBuilder: TCreateCustomApplicationPermissionDraftBuilder<
  TCustomApplicationPermissionDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CustomApplicationPermissionDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

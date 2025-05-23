import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TCustomApplicationDraftGraphql,
  TCreateCustomApplicationDraftBuilder,
} from './types';

export const GraphqlModelBuilder: TCreateCustomApplicationDraftBuilder<
  TCustomApplicationDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CustomApplicationDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TCustomApplicationMenuLinkDraftGraphql,
  TCreateCustomApplicationMenuLinkDraftBuilder,
} from './types';

export const GraphqlModelBuilder: TCreateCustomApplicationMenuLinkDraftBuilder<
  TCustomApplicationMenuLinkDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CustomApplicationMenuLinkDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

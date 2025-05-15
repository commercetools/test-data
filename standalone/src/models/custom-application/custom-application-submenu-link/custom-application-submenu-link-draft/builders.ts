import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TCustomApplicationSubmenuLinkDraftGraphql,
  TCreateCustomApplicationSubmenuLinkDraftBuilder,
} from './types';

export const GraphqlModelBuilder: TCreateCustomApplicationSubmenuLinkDraftBuilder<
  TCustomApplicationSubmenuLinkDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CustomApplicationSubmenuLinkDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

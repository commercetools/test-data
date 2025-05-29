import { createSpecializedBuilder } from '@/core';
import type {
  TCustomApplicationSubmenuLinkDraftGraphql,
  TCreateCustomApplicationSubmenuLinkBuilder,
} from '../types';
import { graphqlFieldsConfig } from './fields-config';

export const GraphqlModelBuilder: TCreateCustomApplicationSubmenuLinkBuilder<
  TCustomApplicationSubmenuLinkDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CustomApplicationSubmenuLinkDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

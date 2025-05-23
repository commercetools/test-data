import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TCustomApplicationSubmenuLinkGraphql,
  TCreateCustomApplicationSubmenuLinkBuilder,
} from './types';

export const GraphqlModelBuilder: TCreateCustomApplicationSubmenuLinkBuilder<
  TCustomApplicationSubmenuLinkGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CustomApplicationSubmenuLinkGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

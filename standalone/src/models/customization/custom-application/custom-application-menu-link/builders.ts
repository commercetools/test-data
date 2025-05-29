import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TCustomApplicationMenuLinkGraphql,
  TCreateCustomApplicationMenuLinkBuilder,
} from './types';

export const GraphqlModelBuilder: TCreateCustomApplicationMenuLinkBuilder<
  TCustomApplicationMenuLinkGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CustomApplicationMenuLinkGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

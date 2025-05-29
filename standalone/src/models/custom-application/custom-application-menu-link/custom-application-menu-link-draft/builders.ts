import { createSpecializedBuilder } from '@/core';
import type {
  TCustomApplicationMenuLinkDraftGraphql,
  TCreateCustomApplicationMenuLinkBuilder,
} from '../types';
import { graphqlFieldsConfig } from './fields-config';

export const GraphqlModelBuilder: TCreateCustomApplicationMenuLinkBuilder<
  TCustomApplicationMenuLinkDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CustomApplicationMenuLinkDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

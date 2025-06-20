import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateResourceIdentifierBuilder,
  TResourceIdentifierGraphql,
  TResourceIdentifierRest,
} from './types';

export const RestModelBuilder: TCreateResourceIdentifierBuilder<
  TResourceIdentifierRest
> = () =>
  createSpecializedBuilder({
    name: 'ResourceIdentifierRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateResourceIdentifierBuilder<
  TResourceIdentifierGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ResourceIdentifierGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

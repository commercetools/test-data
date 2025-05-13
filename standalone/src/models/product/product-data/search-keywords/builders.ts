import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';
import type {
  TCreateSearchKeywordsBuilder,
  TSearchKeywordsGraphql,
  TSearchKeywordsRest,
} from './types';

export const RestModelBuilder: TCreateSearchKeywordsBuilder<
  TSearchKeywordsRest
> = () =>
  createSpecializedBuilder({
    name: 'SearchKeywordsRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateSearchKeywordsBuilder<
  TSearchKeywordsGraphql
> = () =>
  createSpecializedBuilder({
    name: 'SearchKeywordsGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

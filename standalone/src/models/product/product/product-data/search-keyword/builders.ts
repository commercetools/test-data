import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';
import type {
  TSearchKeywordGraphql,
  TCreateSearchKeywordBuilder,
  TSearchKeywordRest,
} from './types';

export const RestModelBuilder: TCreateSearchKeywordBuilder<
  TSearchKeywordRest
> = () =>
  createSpecializedBuilder({
    name: 'SearchKeywordRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateSearchKeywordBuilder<
  TSearchKeywordGraphql
> = () =>
  createSpecializedBuilder({
    name: 'SearchKeywordGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

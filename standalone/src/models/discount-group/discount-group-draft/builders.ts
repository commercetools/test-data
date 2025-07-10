import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateDiscountGroupDraftBuilder,
  TDiscountGroupDraftGraphql,
  TDiscountGroupDraftRest,
} from './types';

export const RestModelBuilder: TCreateDiscountGroupDraftBuilder<
  TDiscountGroupDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'DiscountGroupDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateDiscountGroupDraftBuilder<
  TDiscountGroupDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'DiscountGroupDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

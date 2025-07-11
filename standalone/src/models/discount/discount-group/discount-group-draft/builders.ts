import { createSpecializedBuilder } from '@/core';
import type {
  TCreateDiscountGroupBuilder,
  TDiscountGroupDraftGraphql,
  TDiscountGroupDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateDiscountGroupBuilder<
  TDiscountGroupDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'DiscountGroupDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateDiscountGroupBuilder<
  TDiscountGroupDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'DiscountGroupDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

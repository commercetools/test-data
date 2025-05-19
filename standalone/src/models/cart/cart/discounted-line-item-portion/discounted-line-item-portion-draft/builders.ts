import { createSpecializedBuilder } from '@/core';
import type {
  TCreateDiscountedLineItemPortionBuilder,
  TDiscountedLineItemPortionDraftGraphql,
  TDiscountedLineItemPortionDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateDiscountedLineItemPortionBuilder<
  TDiscountedLineItemPortionDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'DiscountedLineItemPortionDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateDiscountedLineItemPortionBuilder<
  TDiscountedLineItemPortionDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'DiscountedLineItemPortionDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

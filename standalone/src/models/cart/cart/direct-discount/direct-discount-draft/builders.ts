import { createSpecializedBuilder } from '@/core';
import type {
  TCreateDirectDiscountBuilder,
  TDirectDiscountDraftGraphql,
  TDirectDiscountDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateDirectDiscountBuilder<
  TDirectDiscountDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'DirectDiscountDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateDirectDiscountBuilder<
  TDirectDiscountDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'DirectDiscountDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

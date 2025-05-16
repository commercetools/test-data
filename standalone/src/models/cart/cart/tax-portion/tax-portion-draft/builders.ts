import { createSpecializedBuilder } from '@/core';
import type {
  TCreateTaxPortionBuilder,
  TTaxPortionDraftGraphql,
  TTaxPortionDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateTaxPortionBuilder<
  TTaxPortionDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'TaxPortionDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateTaxPortionBuilder<
  TTaxPortionDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'TaxPortionDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

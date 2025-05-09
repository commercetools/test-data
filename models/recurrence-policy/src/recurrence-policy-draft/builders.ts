import { createSpecializedBuilder } from '@commercetools-test-data/core';
import type {
  TCreateRecurrencePolicyBuilder,
  TRecurrencePolicyDraftGraphql,
  TRecurrencePolicyDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateRecurrencePolicyBuilder<
  TRecurrencePolicyDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'RecurrencePolicyDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateRecurrencePolicyBuilder<
  TRecurrencePolicyDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'RecurrencePolicyDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

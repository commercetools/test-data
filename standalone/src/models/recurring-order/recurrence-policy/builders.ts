import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';
import type {
  TCreateRecurrencePolicyBuilder,
  TRecurrencePolicyGraphql,
  TRecurrencePolicyRest,
} from './types';

export const RestModelBuilder: TCreateRecurrencePolicyBuilder<
  TRecurrencePolicyRest
> = () =>
  createSpecializedBuilder({
    name: 'RecurrencePolicyRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateRecurrencePolicyBuilder<
  TRecurrencePolicyGraphql
> = () =>
  createSpecializedBuilder({
    name: 'RecurrencePolicyGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

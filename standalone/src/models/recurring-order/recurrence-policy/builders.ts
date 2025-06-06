import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TCreateRecurrencePolicyBuilder,
  TRecurrencePolicyGraphql,
} from './types';

export const GraphqlModelBuilder: TCreateRecurrencePolicyBuilder<
  TRecurrencePolicyGraphql
> = () =>
  createSpecializedBuilder({
    name: 'RecurrencePolicyGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

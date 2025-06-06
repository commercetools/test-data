import { createSpecializedBuilder } from '@/core';
import type {
  TCreateRecurrencePolicyBuilder,
  TRecurrencePolicyDraftGraphql,
} from '../types';
import { graphqlFieldsConfig } from './fields-config';

export const GraphqlModelBuilder: TCreateRecurrencePolicyBuilder<
  TRecurrencePolicyDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'RecurrencePolicyDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

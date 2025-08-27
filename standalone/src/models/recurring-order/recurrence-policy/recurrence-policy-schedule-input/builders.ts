import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TCreateRecurrencePolicyScheduleInputBuilder,
  TRecurrencePolicyScheduleInputGraphql,
} from './types';

export const GraphqlModelBuilder: TCreateRecurrencePolicyScheduleInputBuilder<
  TRecurrencePolicyScheduleInputGraphql
> = () =>
  createSpecializedBuilder({
    name: 'RecurrencePolicyScheduleInputGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

import { createSpecializedBuilder } from '@/core';
import type {
  TCreateRecurringOrderBuilder,
  TRecurringOrderDraftGraphql,
} from '../types';
import { graphqlFieldsConfig } from './fields-config';

export const GraphqlModelBuilder: TCreateRecurringOrderBuilder<
  TRecurringOrderDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'RecurringOrderDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

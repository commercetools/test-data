import { createSpecializedBuilder } from '@/core';
import type {
  TCreateRecurringOrderBuilder,
  TRecurringOrderDraftGraphql,
  TRecurringOrderDraftRest,
} from '../types';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateRecurringOrderBuilder<
  TRecurringOrderDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'RecurringOrderDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateRecurringOrderBuilder<
  TRecurringOrderDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'RecurringOrderDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

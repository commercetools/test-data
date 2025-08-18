import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';
import type {
  TCreateRecurringOrderBuilder,
  TRecurringOrderGraphql,
  TRecurringOrderRest,
} from './types';

export const RestModelBuilder: TCreateRecurringOrderBuilder<
  TRecurringOrderRest
> = () =>
  createSpecializedBuilder({
    name: 'RecurringOrderRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateRecurringOrderBuilder<
  TRecurringOrderGraphql
> = () =>
  createSpecializedBuilder({
    name: 'RecurringOrderGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

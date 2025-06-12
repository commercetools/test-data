import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TCreateRecurringOrderBuilder,
  TRecurringOrderGraphql,
} from './types';

export const GraphqlModelBuilder: TCreateRecurringOrderBuilder<
  TRecurringOrderGraphql
> = () =>
  createSpecializedBuilder({
    name: 'RecurringOrderGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

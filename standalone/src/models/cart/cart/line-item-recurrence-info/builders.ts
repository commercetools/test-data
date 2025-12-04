import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateLineItemRecurrenceInfoBuilder,
  TLineItemRecurrenceInfoGraphql,
  TLineItemRecurrenceInfoRest,
} from './types';

export const RestModelBuilder: TCreateLineItemRecurrenceInfoBuilder<
  TLineItemRecurrenceInfoRest
> = () =>
  createSpecializedBuilder({
    name: 'LineItemRecurrenceInfoRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateLineItemRecurrenceInfoBuilder<
  TLineItemRecurrenceInfoGraphql
> = () =>
  createSpecializedBuilder({
    name: 'LineItemRecurrenceInfoGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

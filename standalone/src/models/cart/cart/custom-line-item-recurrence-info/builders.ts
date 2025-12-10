import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateCustomLineItemRecurrenceInfoBuilder,
  TCustomLineItemRecurrenceInfoGraphql,
  TCustomLineItemRecurrenceInfoRest,
} from './types';

export const RestModelBuilder: TCreateCustomLineItemRecurrenceInfoBuilder<
  TCustomLineItemRecurrenceInfoRest
> = () =>
  createSpecializedBuilder({
    name: 'CustomLineItemRecurrenceInfoRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateCustomLineItemRecurrenceInfoBuilder<
  TCustomLineItemRecurrenceInfoGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CustomLineItemRecurrenceInfoGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

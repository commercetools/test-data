import { createSpecializedBuilder } from '@/core';
import type {
  TCreateLineItemRecurrenceInfoBuilder,
  TLineItemRecurrenceInfoDraftGraphql,
  TLineItemRecurrenceInfoDraftRest,
} from '../types';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateLineItemRecurrenceInfoBuilder<
  TLineItemRecurrenceInfoDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'LineItemRecurrenceInfoDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateLineItemRecurrenceInfoBuilder<
  TLineItemRecurrenceInfoDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'LineItemRecurrenceInfoDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

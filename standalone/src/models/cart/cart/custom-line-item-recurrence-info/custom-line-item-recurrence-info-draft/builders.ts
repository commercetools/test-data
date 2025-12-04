import { createSpecializedBuilder } from '@/core';
import type {
  TCreateCustomLineItemRecurrenceInfoBuilder,
  TCustomLineItemRecurrenceInfoDraftGraphql,
  TCustomLineItemRecurrenceInfoDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateCustomLineItemRecurrenceInfoBuilder<
  TCustomLineItemRecurrenceInfoDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'CustomLineItemRecurrenceInfoDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateCustomLineItemRecurrenceInfoBuilder<
  TCustomLineItemRecurrenceInfoDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CustomLineItemRecurrenceInfoDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

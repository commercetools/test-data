import { createSpecializedBuilder } from '@/core';
import type {
  TCreateShippingBuilder,
  TShippingDraftGraphql,
  TShippingDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateShippingBuilder<
  TShippingDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'ShippingDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateShippingBuilder<
  TShippingDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ShippingDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

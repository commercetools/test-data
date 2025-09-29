import {
  createSpecializedBuilder,
  createCompatibilityBuilder,
  type TModelFieldsConfig,
} from '@/core';
import type {
  TCreateShippingMethodBuilder,
  TShippingMethodDraftRest,
  TShippingMethodDraftGraphql,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

// REST shipping method draft builder
export const RestModelBuilder: TCreateShippingMethodBuilder<
  TShippingMethodDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'ShippingMethodDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

// GraphQL shipping method draft builder
export const GraphqlModelBuilder: TCreateShippingMethodBuilder<
  TShippingMethodDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ShippingMethodDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

// Compatibility builder for backwards compatibility
export const CompatModelBuilder = <
  TShippingMethodDraftModel extends
    | TShippingMethodDraftRest
    | TShippingMethodDraftGraphql = TShippingMethodDraftRest,
>() =>
  createCompatibilityBuilder<TShippingMethodDraftModel>({
    name: 'ShippingMethodDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TShippingMethodDraftModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TShippingMethodDraftModel>,
    },
  });

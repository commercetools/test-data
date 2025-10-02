import {
  createSpecializedBuilder,
  createCompatibilityBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateShippingMethodDraftBuilder,
  TShippingMethodDraftRest,
  TShippingMethodDraftGraphql,
} from './types';

export const RestModelBuilder: TCreateShippingMethodDraftBuilder<
  TShippingMethodDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'ShippingMethodDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateShippingMethodDraftBuilder<
  TShippingMethodDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ShippingMethodDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

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

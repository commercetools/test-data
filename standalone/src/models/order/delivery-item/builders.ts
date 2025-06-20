import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TDeliveryItemGraphql,
  TDeliveryItemRest,
  TCreateDeliveryItemBuilder,
} from './types';

export const RestModelBuilder: TCreateDeliveryItemBuilder<
  TDeliveryItemRest
> = () =>
  createSpecializedBuilder({
    name: 'DeliveryItemRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateDeliveryItemBuilder<
  TDeliveryItemGraphql
> = () =>
  createSpecializedBuilder({
    name: 'DeliveryItemGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatDeliveryItemModelBuilder = <
  TCreateDeliveryItemModel extends TDeliveryItemGraphql | TDeliveryItemRest,
>() =>
  createCompatibilityBuilder({
    name: 'DeliveryItemCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCreateDeliveryItemModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TCreateDeliveryItemModel>,
    },
  });

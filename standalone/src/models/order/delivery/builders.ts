import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TDeliveryGraphql,
  TDeliveryRest,
  TCreateDeliveryBuilder,
} from './types';

export const RestModelBuilder: TCreateDeliveryBuilder<TDeliveryRest> = () =>
  createSpecializedBuilder({
    name: 'DeliveryRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateDeliveryBuilder<
  TDeliveryGraphql
> = () =>
  createSpecializedBuilder({
    name: 'DeliveryGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatDeliveryModelBuilder = <
  TCreateDeliveryModel extends TDeliveryGraphql | TDeliveryRest,
>() =>
  createCompatibilityBuilder({
    name: 'DeliveryCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCreateDeliveryModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TCreateDeliveryModel>,
    },
  });

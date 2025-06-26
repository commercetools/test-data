import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TLineItemReturnItemGraphql,
  TLineItemReturnItemRest,
  TCreateLineItemReturnItemBuilder,
} from './types';

export const RestModelBuilder: TCreateLineItemReturnItemBuilder<
  TLineItemReturnItemRest
> = () =>
  createSpecializedBuilder({
    name: 'LineItemReturnItemRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateLineItemReturnItemBuilder<
  TLineItemReturnItemGraphql
> = () =>
  createSpecializedBuilder({
    name: 'LineItemReturnItemGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatLineItemReturnItemModelBuilder = <
  TCreateLineItemReturnItemModel extends
    | TLineItemReturnItemGraphql
    | TLineItemReturnItemRest,
>() =>
  createCompatibilityBuilder({
    name: 'LineItemReturnItemCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCreateLineItemReturnItemModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TCreateLineItemReturnItemModel>,
    },
  });

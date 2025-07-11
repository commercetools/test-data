import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';
import type {
  TShoppingListGraphql,
  TShoppingListRest,
  TCreateShoppingListBuilder,
} from './types';

export const RestModelBuilder: TCreateShoppingListBuilder<
  TShoppingListRest
> = () =>
  createSpecializedBuilder({
    name: 'ShoppingListRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateShoppingListBuilder<
  TShoppingListGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ShoppingListGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatShoppingListModelBuilder = <
  TShoppingListModel extends
    | TShoppingListRest
    | TShoppingListGraphql = TShoppingListRest,
>() =>
  createCompatibilityBuilder<TShoppingListModel>({
    name: 'ShoppingListCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TShoppingListModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TShoppingListModel>,
    },
  });

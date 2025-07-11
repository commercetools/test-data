import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import {
  TShoppingListLineItemGraphql,
  TShoppingListLineItemRest,
  TCreateShoppingListLineItemBuilder,
} from './types';

export const RestModelBuilder: TCreateShoppingListLineItemBuilder<
  TShoppingListLineItemRest
> = () =>
  createSpecializedBuilder({
    name: 'ShoppingListLineItemRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateShoppingListLineItemBuilder<
  TShoppingListLineItemGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ShoppingListLineItemGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

import { createSpecializedBuilder } from '@/core';
import {
  TShoppingListLineItemDraftGraphql,
  TShoppingListLineItemDraftRest,
  TCreateShoppingListLineItemBuilder,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateShoppingListLineItemBuilder<
  TShoppingListLineItemDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'ShoppingListLineItemRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateShoppingListLineItemBuilder<
  TShoppingListLineItemDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ShoppingListLineItemGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

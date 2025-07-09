import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import type {
  TShoppingListDraftGraphql,
  TShoppingListDraftRest,
  TCreateShoppingListBuilder,
} from '../types';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateShoppingListBuilder<
  TShoppingListDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'ShoppingListDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateShoppingListBuilder<
  TShoppingListDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ShoppingListDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatShoppingListDraftModelBuilder = <
  TShoppingListDraftModel extends
    | TShoppingListDraftRest
    | TShoppingListDraftGraphql = TShoppingListDraftRest,
>() =>
  createCompatibilityBuilder<TShoppingListDraftModel>({
    name: 'ShoppingListDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TShoppingListDraftModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TShoppingListDraftModel>,
    },
  });

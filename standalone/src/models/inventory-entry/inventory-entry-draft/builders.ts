import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import type {
  TCreateInventoryEntryBuilder,
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateInventoryEntryBuilder<
  TInventoryEntryDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'InventoryEntryDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateInventoryEntryBuilder<
  TInventoryEntryDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'InventoryEntryDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatInventoryEntryModelBuilder = <
  TInventoryEntryModel extends
    | TInventoryEntryDraftRest
    | TInventoryEntryDraftGraphql = TInventoryEntryDraftRest,
>() =>
  createCompatibilityBuilder<TInventoryEntryModel>({
    name: 'InventoryEntryDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TInventoryEntryModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TInventoryEntryModel>,
    },
  });

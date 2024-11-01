import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateInventoryEntryBuilder,
  TInventoryEntryRest,
  TInventoryEntryGraphql,
  TInventoryEntry,
} from './types';

export const RestModelBuilder: TCreateInventoryEntryBuilder<
  TInventoryEntryRest
> = () =>
  createSpecializedBuilder({
    name: 'InventoryEntryRestBuilder',
    type: 'rest',
    modelFieldsConfig:
      restFieldsConfig as unknown as TModelFieldsConfig<TInventoryEntry>,
  });

export const GraphqlModelBuilder: TCreateInventoryEntryBuilder<
  TInventoryEntryGraphql
> = () =>
  createSpecializedBuilder({
    name: 'InventoryEntryGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatInventoryEntryModelBuilder = <
  TInventoryEntryModel extends
    | TInventoryEntryRest
    | TInventoryEntryGraphql = TInventoryEntryRest,
>() =>
  createCompatibilityBuilder<TInventoryEntryModel>({
    name: 'InventoryEntryCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TInventoryEntryModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TInventoryEntryModel>,
    },
  });

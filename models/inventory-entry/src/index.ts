import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatInventoryEntryModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export * from './inventory-entry-draft';
export * as InventoryEntry from '.';

export * from './types';

export const InventoryEntryRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const InventoryEntryGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `InventoryEntryRest` or `InventoryEntryGraphql` exported models instead of `InventoryEntry`.
 */
export const random = CompatInventoryEntryModelBuilder;
export const presets = modelPresets.graphqlPresets;

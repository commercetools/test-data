// export { default as random } from './builder';
// export { default as presets } from './presets';

import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatInventoryEntryModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const InventoryEntryDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const InventoryEntryDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `InventoryEntryDraftRest` or `InventoryEntryDraftGraphql` exported models instead of `InventoryEntryDraft`.
 */
export const InventoryEntryDraft = {
  random: CompatInventoryEntryModelBuilder,
  presets: modelPresets.compatPresets,
};

// export { default as random } from './builder';
// export { default as presets } from './presets';

import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatCartModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const CartDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const CartDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `CartDraftRest` or `CartDraftGraphql` exported models instead of `CartDraft`.
 */
export const CartDraft = {
  random: CompatCartModelBuilder,
  presets: modelPresets.compatPresets,
};

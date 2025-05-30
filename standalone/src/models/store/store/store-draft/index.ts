import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from './builder';
import * as modelPresets from './presets';
export { default as presets } from './presets';

export const StoreDraftRest = {
  random: RestModelBuilder,
};

export const StoreDraftGraphql = {
  random: GraphqlModelBuilder,
};

/**
 * @deprecated Use `StoreDraftRest` or `StoreDraftGraphql` instead
 */

export const StoreDraft = {
  random: CompatModelBuilder,
  presets: {
    empty: modelPresets.default.empty,
  },
};

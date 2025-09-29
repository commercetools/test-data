import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export * from '../types';

// New specialized builders
export const ShippingMethodDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ShippingMethodDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ShippingMethodDraftRest` or `ShippingMethodDraftGraphql` exported models instead of `ShippingMethodDraft`.
 */
export const ShippingMethodDraft = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};

// Legacy exports for backwards compatibility
export { default as random } from './builder';
export { default as presets } from './presets';

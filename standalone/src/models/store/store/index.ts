import {
  CompatModelBuilder,
  RestModelBuilder,
  GraphqlModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export * from './types';

export const StoreRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const StoreGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `StoreRest` or `StoreGraphql` exported models instead of  `Store`
 */
export const Store = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};

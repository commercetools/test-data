import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export * from './types';
export * from './product-of-selection/types';

export * from './product-selection-draft';
export * from './product-of-selection';

export * from './constants';

export const ProductSelectionRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ProductSelectionGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ProductSelectionRest` or `ProductSelectionGraphql` exported models instead of `ProductSelection`.
 */
export const ProductSelection = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};

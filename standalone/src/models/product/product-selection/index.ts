import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as constants from './constants';
import * as modelPresets from './presets';

export * from './types';
export * from './product-of-selection/types';

export * from './product-selection-draft';
export * from './product-of-selection';

// @deprecated Use the `constants` property from the models instead
export * from './constants';

export const ProductSelectionRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
  constants,
};

export const ProductSelectionGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
  constants,
};

/**
 * @deprecated Use `ProductSelectionRest` or `ProductSelectionGraphql` exported models instead of `ProductSelection`.
 */
export const ProductSelection = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
  constants,
};

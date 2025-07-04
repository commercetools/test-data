import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const TaxRateRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const TaxRateGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `TaxRateRest` or `TaxRateGraphql` exported models instead of `TaxRate`.
 */
export const TaxRate = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};

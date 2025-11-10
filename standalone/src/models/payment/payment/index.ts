import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as presets from './presets';

export const PaymentRest = {
  random: RestModelBuilder,
  presets: presets.restPresets,
};

export const PaymentGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPresets,
};

/**
 * @deprecated Use `PaymentRest` or `PaymentGraphql` exported models instead of `Payment`.
 */
export const Payment = {
  random: CompatModelBuilder,
  presets: presets.compatPresets,
};

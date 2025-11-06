import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as presets from './presets';

export const PaymentMethodInfoRest = {
  random: RestModelBuilder,
  presets: presets.restPresets,
};

export const PaymentMethodInfoGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPresets,
};

/**
 * @deprecated Use `PaymentMethodInfoRest` or `PaymentMethodInfoGraphql` exported models instead of `PaymentMethodInfo`.
 */
export const PaymentMethodInfo = {
  random: CompatModelBuilder,
  presets: presets.compatPresets,
};

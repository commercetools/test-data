import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as presets from './presets';

export const PaymentStatusRest = {
  random: RestModelBuilder,
  presets: presets.restPresets,
};

export const PaymentStatusGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPresets,
};

/**
 * @deprecated Use `PaymentStatusRest` or `PaymentStatusGraphql` exported models instead of `PaymentStatus`.
 */
export const PaymentStatus = {
  random: CompatModelBuilder,
  presets: presets.compatPresets,
};

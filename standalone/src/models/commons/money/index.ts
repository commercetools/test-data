import {
  CompatModelBuilder,
  GraphQLModelBuilder,
  RestModelBuilder,
} from './builders';
import * as moneyPresets from './presets';

export const MoneyRest = {
  random: RestModelBuilder,
  presets: moneyPresets.restPresets,
};

export const MoneyGraphql = {
  random: GraphQLModelBuilder,
  presets: moneyPresets.graphqlPresets,
};

/**
 * @deprecated Use `MoneyRest` or `MoneyGraphql` exported models instead of `Money`.
 */
export const Money = {
  random: CompatModelBuilder,
  presets: moneyPresets.compatPresets,
};

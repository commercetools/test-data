import {
  CompatMoneyModelBuilder,
  GraphQLModelBuilder,
  RestModelBuilder,
} from './builder';
import * as moneyPresets from './presets';

export * from './types';
export * from './money-draft';

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
  random: CompatMoneyModelBuilder,
  presets: moneyPresets.compatPresets,
};

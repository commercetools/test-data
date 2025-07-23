import {
  CompatDraftModelBuilder,
  GraphQLModelBuilder,
  RestModelBuilder,
} from './builders';
import * as moneyDraftPresets from './presets';

export const MoneyDraftRest = {
  random: RestModelBuilder,
  presets: moneyDraftPresets.restPresets,
};

export const MoneyDraftGraphql = {
  random: GraphQLModelBuilder,
  presets: moneyDraftPresets.graphqlPresets,
};

/**
 * @deprecated Use `MoneyDraftRest` or `MoneyDraftGraphql` exported models instead of `MoneyDraft`.
 */
export const MoneyDraft = {
  random: CompatDraftModelBuilder,
  presets: moneyDraftPresets.compatPresets,
};

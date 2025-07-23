import {
  CompatMoneyDraftModelBuilder,
  GraphQLModelBuilder,
  RestModelBuilder,
} from './builder';

export const MoneyDraftRest = {
  random: RestModelBuilder,
};

export const MoneyDraftGraphql = {
  random: GraphQLModelBuilder,
};

/**
 * @deprecated Use `MoneyDraftRest` or `MoneyDraftGraphql` exported models instead of `MoneyDraft`.
 */
export const MoneyDraft = {
  random: CompatMoneyDraftModelBuilder,
};

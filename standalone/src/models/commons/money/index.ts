import {
  CompatMoneyModelBuilder,
  GraphQLModelBuilder,
  RestModelBuilder,
} from './builder';

export const MoneyRest = {
  random: RestModelBuilder,
};

export const MoneyGraphql = {
  random: GraphQLModelBuilder,
};

/**
 * @deprecated Use `MoneyRest` or `MoneyGraphql` exported models instead of `Money`.
 */
export const Money = {
  random: CompatMoneyModelBuilder,
};

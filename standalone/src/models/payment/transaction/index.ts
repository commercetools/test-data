import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as constants from './constants';
import * as presets from './presets';

export const TransactionRest = {
  random: RestModelBuilder,
  presets: presets.restPresets,
  constants: constants,
};

export const TransactionGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPresets,
  constants: constants,
};

/**
 * @deprecated Use `TransactionRest` or `TransactionGraphql` exported models instead of `Transaction`.
 */
export const Transaction = {
  random: CompatModelBuilder,
  presets: presets.compatPresets,
  constants: constants,
};

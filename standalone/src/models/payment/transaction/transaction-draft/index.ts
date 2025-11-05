import * as constants from '../constants';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as presets from './presets';

export const TransactionDraftRest = {
  random: RestModelBuilder,
  presets: presets.restPresets,
  constants: constants,
};

export const TransactionDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPresets,
  constants: constants,
};

/**
 * @deprecated Use `TransactionDraftRest` or `TransactionDraftGraphql` exported models instead of `TransactionDraft`.
 */
export const TransactionDraft = {
  random: CompatModelBuilder,
  presets: presets.compatPresets,
  constants: constants,
};

import * as constants from '../constants';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatOrderFromCartDraftModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const OrderFromCartDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
  constants: constants,
};

export const OrderFromCartDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
  constants: constants,
};

/**
 * @deprecated Use `OrderFromCartDraftRest` or `OrderFromCartDraftGraphql` exported models instead of `OrderFromCartDraft`.
 */
export const OrderFromCartDraft = {
  presets: modelPresets.compatPresets,
  random: CompatOrderFromCartDraftModelBuilder,
  constants: constants,
};

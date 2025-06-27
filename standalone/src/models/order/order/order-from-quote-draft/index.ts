import * as constants from '../constants';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatOrderFromQuoteDraftModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const OrderFromQuoteDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
  constants: constants,
};

export const OrderFromQuoteDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
  constants: constants,
};

/**
 * @deprecated Use `OrderFromQuoteDraftRest` or `OrderFromQuoteDraftGraphql` exported models instead of `OrderFromQuoteDraft`.
 */
export const OrderFromQuoteDraft = {
  presets: modelPresets.compatPresets,
  random: CompatOrderFromQuoteDraftModelBuilder,
  constants: constants,
};

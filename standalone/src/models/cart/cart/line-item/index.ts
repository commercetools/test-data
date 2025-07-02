import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatLineItemModelBuilder,
} from './builders';
import * as constants from './constants';
import * as modelPresets from './presets';

export const LineItemRest = {
  constants,
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const LineItemGraphql = {
  constants,
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};
/**
 * @deprecated Use `LineItemRest` or `LineItemGraphql` instead.
 */
export const LineItem = {
  constants,
  random: CompatLineItemModelBuilder,
};

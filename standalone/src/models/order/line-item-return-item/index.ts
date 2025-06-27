import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatLineItemReturnItemModelBuilder,
} from './builders';
import * as constants from './constants';
import * as modelPresets from './presets';

export const LineItemReturnItemRest = {
  constants: constants,
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const LineItemReturnItemGraphql = {
  constants: constants,
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated use `LineItemReturnItemRest` or `LineItemReturnItemGraphql` instead
 */
export const LineItemReturnItem = {
  constants: constants,
  random: CompatLineItemReturnItemModelBuilder,
  presets: modelPresets.compatPresets,
};

import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatLineItemReturnItemModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export * as constants from './constants';

export const LineItemReturnItemRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const LineItemReturnItemGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated use `LineItemReturnItemRest` or `LineItemReturnItemGraphql` instead
 */
export const LineItemReturnItem = {
  random: CompatLineItemReturnItemModelBuilder,
  presets: modelPresets.compatPresets,
};
